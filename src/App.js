import React, { useState } from 'react';
import CardList from './CardList';

function App() {
  const [cards, setCards] = useState(SAMPLE_CARDS) 
  return (
    <CardList cards={cards} />
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'Question 1?',
    answer: '3',
    options: [
      '1',
      '2',
      '3',
      '4'
    ]
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: '6',
    options: [
      '5',
      '6',
      '7',
      '8'
    ]
  }
]

export default App;
