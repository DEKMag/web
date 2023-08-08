import React, { useState, useEffect } from 'react';
import styles from './Calendar.module.scss';

const Calendar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.date}>
        <p>{formatDate(time)}</p>
      </div>
    </div>
  );
};

export default Calendar;
