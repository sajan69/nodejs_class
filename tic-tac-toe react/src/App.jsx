import { useState } from 'react'
import Box from './components/box'

import './App.css'


  const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];



function App() {
 const [currentState, setCurrentState] = useState(Array(9).fill(''));
 const [currentPlayer, setCurrentPlayer] = useState('X');
 const [isGameOver, setIsGameOver] = useState(false);

 const checkWin = () => {
    
 }

 const handleBoxClick = (index) => {
  if (currentState[index] !== '' || isGameOver) return
  setCurrentState(currentState.map((cs,index) => idx === index ? 'X' : cs));
  setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
 }
 return (
  <main>
    <div className='gameboard'>
      {currentState.map((cs, index)=>(
        <Box
        key={index}
        currentSymbol={cs}
        onClick={()=>handleBoxClick(index)}
        />
      ))}
    </div>
    </main>
 )
}


export default App
