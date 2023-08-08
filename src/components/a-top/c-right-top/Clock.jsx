import React, { useState, useEffect } from 'react';
import styles from './Clock.module.scss';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Обновляем время каждую секунду (1000 миллисекунд)

    return () => {
      clearInterval(interval); // Очищаем интервал при размонтировании компонента
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={styles.clock}>
      <div className={styles.time}>
        <p>{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default Clock;
