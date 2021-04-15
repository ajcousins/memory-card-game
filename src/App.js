import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/UI/Container";
import MainHeader from "./components/MainHeader/MainHeader";
import CardArea from "./components/UI/CardArea";
import WinModal from "./components/WinModal/WinModal";

function App() {
  const [currentStreak, setCurrentStreak] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(0);

  const scoreHandler = (number) => {
    if (currentStreak.includes(number)) {
      setCurrentStreak([]);
      setCurrentScore(0);
    } else {
      setCurrentStreak([...currentStreak, number]);
      setCurrentScore(currentScore + 1);
    }
  };

  useEffect(() => {
    if (currentScore > highScore) setHighScore(currentScore);
  }, [currentScore, highScore]);

  useEffect(() => {
    if (highScore === 12) {
      console.log("You win!");
      setGameStatus(1);
    }
  }, [highScore]);

  const resetGame = () => {
    setGameStatus(0);
    setCurrentStreak([]);
    setCurrentScore(0);
    setHighScore(0);
  };

  return (
    <div>
      {gameStatus ? <WinModal onRestart={resetGame} /> : null}
      <Container>
        <MainHeader score={currentScore} highScore={highScore} />
        <CardArea onShuffle={(number) => scoreHandler(number)} />
      </Container>
    </div>
  );
}

export default App;
