import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function OrderForm({ date, setDate, availableTimes, submitForm }) {
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setDate(event.target.value);
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
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
        <>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>{availableTime}</option>
            ))}
          </select>
        </>
      ) : (
        <p>Loading available times...</p>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
      <Routes>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </form>
  );
}

export default OrderForm;
