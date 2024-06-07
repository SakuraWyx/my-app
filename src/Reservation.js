import React, { useState, useReducer } from 'react';
import OrderForm from './OrderForm';

// 定义初始化的 availableTimes
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

// 定义 reducer 函数
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // 根据选定的日期更新 availableTimes
      // 目前可以返回相同的时间
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    default:
      return state;
  }
};

function Reservation() {
  const [date, setDate] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <h1>Make your reservation</h1>
      <OrderForm date={date} setDate={setDate} availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Reservation;

