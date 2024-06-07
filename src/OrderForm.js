import React, { useState } from 'react';

function OrderForm({ date, setDate, availableTimes, dispatch }) {
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: 'UPDATE_TIMES', payload: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 你可以在这里执行表单提交逻辑
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))}
      </select>
      
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
      
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default OrderForm;
