import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Main() {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservation');
  };

  return (
    <main className='main'>
      <section>
        <h1>Little Lemon Restaurant</h1>
        <h2>Chicago</h2>
        <p>
          A Mediterranean restaurant offers a culinary journey through the vibrant flavors and rich traditions of the Mediterranean region. With its warm and inviting ambiance, reminiscent of a coastal retreat, patrons can indulge in an array of fresh and wholesome dishes inspired by the sun-kissed shores of Greece, Italy, Spain, and beyond. From savory seafood delights like grilled octopus and seafood paella to aromatic herb-infused lamb dishes and colorful salads bursting with ripe tomatoes and olives, each bite transports diners to the azure waters and sun-drenched landscapes of the Mediterranean. With an emphasis on quality ingredients, bold spices, and simple yet elegant preparations, a visit to a Mediterranean restaurant is not just a meal but a celebration of the vibrant and diverse culinary heritage of the region.        </p>
        <button onClick={handleReservationClick}>Reservation</button>
      </section>
      <img src='littlelemon.png' alt='restaurant pic' />
    </main>
  );
}

export default Main;
