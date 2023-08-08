import React, { useState } from 'react';
import styles from './Range.module.css'

function RangeSlider() {
  const [value, setValue] = useState(0); // Изначальное значение суммы чисел

  // Обработчик изменения значения ползунка
  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  return (
    <div className={styles.blocks}>
      <h1 className={styles.text}>Сумма чисел: {value}</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default RangeSlider;
