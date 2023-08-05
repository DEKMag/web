import React, { useState, useEffect } from 'react';
import './styles.css'; // Подключите ваш стилевой файл, где определен класс 'box'

const AnimatedBoxes = () => {
  const [boxes, setBoxes] = useState([]);

  // Создаем 100 элементов и добавляем их в состояние
  useEffect(() => {
    const createBoxes = () => {
      let newBoxes = [];
      for (let i = 1; i <= 100; i++) {
        newBoxes.push(<div key={i} className="box" />);
      }
      setBoxes(newBoxes);
    };
    createBoxes();
  }, []);

  // Функция для добавления класса 'animate' случайному элементу
  const animateBx = () => {
    const num = Math.floor(Math.random() * boxes.length);
    const updatedBoxes = [...boxes];
    updatedBoxes[num] = React.cloneElement(boxes[num], {
      className: `${boxes[num].props.className} animate`,
    });
    setBoxes(updatedBoxes);
  };

  // Запускаем анимацию при монтировании компонента и обновляем её каждые 3 секунды
  useEffect(() => {
    const interval = setInterval(animateBx, 3000);
    return () => clearInterval(interval);
  }, [boxes]);

  return <div className="sec">{boxes}</div>;
};

export default AnimatedBoxes;

/*
В этом коде мы создали компонент AnimatedBoxes, который содержит 100 элементов <div> с классом 'box'. Класс 'animate' добавляется случайному элементу при использовании интервала.

Обратите внимание, что здесь мы использовали useState для хранения состояния с массивом boxes, и useEffect для запуска анимации при монтировании компонента и обновления её каждые 3 секунды.

Помните также подключить свой стилевой файл с определением класса 'box' и правильно использовать компонент AnimatedBoxes в вашем корневом компоненте или в другом месте вашего приложения.
*/
