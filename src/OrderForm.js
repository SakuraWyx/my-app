import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function OrderForm({ date, setDate, availableTimes, submitForm }) {
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 检查表单字段是否有效
    const form = document.getElementById('reservation-form');
    setIsFormValid(form.checkValidity());
  }, [date, time, guests, occasion]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 调用父组件传递的 submitForm 函数
    submitForm({
      date,
      time,
      guests,
      occasion,
    });
    // 导航到确认页面
    navigate('/confirmed-booking');
  };

  return (
    <div className='container'>
      <h4>Make your reservation</h4>
      <div className='form'>
        <form id="reservation-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
          </div>

          {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
            <div className="form-row">
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time" value={time} onChange={handleTimeChange} required aria-label="Choose time">
                {availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
              </select>
            </div>
          ) : (
            <p>Loading available times...</p>
          )}

          <div className="form-row">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required aria-label="Number of guests" />
          </div>

          <div className="form-row">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange} required aria-label="Occasion">
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="form-row">
            <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="Make Your reservation" />
          </div>
        </form>
      </div>
    </div>

  );
}

export default OrderForm;