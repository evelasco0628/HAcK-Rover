import React, { useState, useEffect } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

function Control() {
  const [temp, setTemp] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    // Listen for temperature updates
    socket.on('temp', (data) => {
      setTemp(data);
    });

    // Listen for ultrasonic updates
    socket.on('ultrasonic', (data) => {
      setUltrasonic(data);
    });

    socket.on('humidity', (data) => {
      setHumidity(data);
    });

    return () => {
      socket.off('temp');
      socket.off('ultrasonic');
      socket.off('humidity');
    };
  }, []);

  const sendDirection = (direction) => {
    socket.emit('send-direction', direction);
  };

  const sendArmValue = (value) => {
    socket.emit('send-arm-value', value);
  };

  return (
    <div>
      <h1>Control</h1>
      <button onClick={() => sendDirection('left')}>Left</button>
      <button onClick={() => sendDirection('right')}>Right</button>
      <button onClick={() => sendDirection('forward')}>Forward</button>
      <button onClick={() => sendDirection('backward')}>Backward</button>
    </div>
  );
}

export default Control;