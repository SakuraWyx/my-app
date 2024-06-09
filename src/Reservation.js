import React, { useState, useReducer, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import OrderForm from './OrderForm';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI } from './api';
import './Form.css';

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function Reservation() {
  const [date, setDate] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate(); // 导航函数

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];
        const times = await fetchAPI(today);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };
    fetchAvailableTimes();
  }, []);

  // 提交表单函数
  const submitForm = (formData) => {
    // 在此执行提交逻辑，例如提交到后端API
    console.log('Form submitted:', formData);
    // 这里模拟提交成功后的导航到确认页面
    navigate('/confirmed-booking');
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<OrderForm date={date} setDate={setDate} availableTimes={availableTimes} submitForm={submitForm} />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </div>
  );
}

export default Reservation;
