import { useState, useEffect } from 'react';

const Game = () => {
  const [words, setWords] = useState([]);
  const [savedWords, setSavedWords] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    generateWords();
  }, []);

  const generateWords = () => {
    const newWords = [];
    for (let i = 0; i < 10; i++) {
      newWords.push(generateRandomWord(5));
    }
    setWords(newWords);
  };

  const generateRandomWord = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomWord = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters[randomIndex];
    }
    return randomWord;
  };

  const handleClick = () => {
    if (!isGameStarted) {
      setIsGameStarted(true);
    } else {
      generateWords();
    }
  };

  const handleSaveWords = () => {
    setSavedWords([...savedWords, ...words]);
    generateWords();
  };

  return (
    <div>
      <h1>Word Game</h1>
      <div>
        {!isGameStarted ? (
          <button onClick={handleClick}>Start Game</button>
        ) : (
          <button onClick={handleClick}>New Words</button>
        )}
        {isGameStarted && <button onClick={handleSaveWords}>Save Words</button>}
      </div>
      <div>
        {words.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
      <div>
        <h2>Saved Words</h2>
        {savedWords.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
    </div>
  );
};

export default Game;

// import React, { useState } from 'react';

// Функция для генерации случайных слов
const generateRandomWords = (wordLibrary, count) => {
  const words = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * wordLibrary.length);
    words.push(wordLibrary[randomIndex]);
  }
  return words;
};

const WordGame = () => {
  // Состояние для хранения текущих и сохраненных слов
  const [currentWords, setCurrentWords] = useState([]);
  const [savedWords, setSavedWords] = useState([]);

  // Функция для сохранения текущих слов
  const handleSaveWords = () => {
    setSavedWords(currentWords);
  };

  // Функция для обновления текущих слов
  const handleUpdateWords = () => {
    const newWords = generateRandomWords(wordLibrary, 5);
    setCurrentWords(newWords);
  };

  // Функция для запуска игры
  const handleStartGame = () => {
    const newWords = generateRandomWords(wordLibrary, 5);
    setCurrentWords(newWords);
  };

  return (
    <div>
      <table>
        <tbody>
          {currentWords.map((word, index) => (
            <tr key={index}>
              <td>{word}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveWords}>Сохранить слова</button>
      <button onClick={handleUpdateWords}>Обновить</button>
      <button onClick={handleStartGame}>Запуск</button>
    </div>
  );
};

export default WordGame;