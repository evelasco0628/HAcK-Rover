import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import './Control.css';

const socket = io('http://localhost:8000');

function Control() {
  const [temp, setTemp] = useState(null);
  const [ultrasonic, setUltrasonic] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [repeatedKey, setRepeatedKey] = useState(null);


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

    useEffect(() => {
      const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();
        if (['w', 'a', 's', 'd'].includes(key) && repeatedKey !== key) {
          setActiveKey(key);
          setRepeatedKey(key);
          sendDirection(key);
        }
      };
  
      const handleKeyUp = (event) => {
        const key = event.key.toLowerCase();
        if (['w', 'a', 's', 'd'].includes(key)) {
          setActiveKey(null);
          setRepeatedKey(null);
          sendDirection('stop');
        }
      };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [repeatedKey]);

  const sendDirection = (key) => {
    switch (key) {
      case 'w':
        socket.emit('send-direction', 'forward');
        break;
      case 'a':
        socket.emit('send-direction', 'left');
        break;
      case 's':
        socket.emit('send-direction', 'backward');
        break;
      case 'd':
        socket.emit('send-direction', 'right');
        break;
      default:
        socket.emit('send-direction', 'stop');
        break;
    }
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
      <div className="keys">
      <div className="key-row">
        <div className={`key ${activeKey === 'w' ? 'active' : ''}`}>W</div>
      </div>
      <div className="key-row">
        <div className={`key ${activeKey === 'a' ? 'active' : ''}`}>A</div>
        <div className={`key ${activeKey === 's' ? 'active' : ''}`}>S</div>
        <div className={`key ${activeKey === 'd' ? 'active' : ''}`}>D</div>
      </div>
    </div>
    </div>
  );
}

export default Control;