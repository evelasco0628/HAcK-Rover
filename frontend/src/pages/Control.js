import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import './Control.css';

const socket = io('http://localhost:8000');

function Control() {
  const [temp, setTemp] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [textColor, setTextColor] = useState('black');

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

  useEffect( () => {
    const handleKeyDown = (event) => {
      if (event.key === 'w') {
        setTextColor('blue');
        sendDirection('forward');
      } else if (event.key === 'a') {
        setTextColor('red')
        sendDirection('left');
      } else if (event.key === 's') {
        sendDirection('backward');
      } else if (event.key === 'd') {
        sendDirection('right');
      }
    }

    const handleKeyUp = () => {
      setTextColor('black')
      sendDirection('stop');
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const sendDirection = (direction) => {
    socket.emit('send-direction', direction);
  };

  const sendArmValue = (value) => {
    socket.emit('send-arm-value', value);
  };

  return (
    <div>
      <h1>Control</h1>
      <p>Temperature: {temp !== null ? `${temp}°C` : 'Loading...'}</p>
      <p>Ultrasonic: {ultrasonic !== null ? `${ultrasonic} cm` : 'Loading...'}</p>
      <p>Humidity: {humidity !== null ? `${humidity}%` : 'Loading...'}</p>
      <h1>Doze Cam</h1>
      <iframe src="http://192.168.50.5/"></iframe>
    </div>
  );
}

export default Control;