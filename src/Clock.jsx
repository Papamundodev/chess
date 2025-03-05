import { useEffect, useState } from "react";
import { formatTime } from "./logic/checkPossibleMoves";
const Clock = ({
  isClockRunning,
  resetClock,
  setResetClock,
  baseTime,
  onGameOver,
  gameOver,
  player,
}) => {
  const [timeLeft, setTimeLeft] = useState(baseTime);

  useEffect(() => {
    if (resetClock) {
      setTimeLeft(baseTime);
      setResetClock(false);
    }
  }, [resetClock, setResetClock]);

  useEffect(() => {
    if (parseFloat(timeLeft.toFixed(2)) === 0.0) {
      onGameOver(player.name);
      setTimeLeft(0.0);
    }
  }, [timeLeft]);

  useEffect(() => {
    let timer;
    if (isClockRunning && timeLeft > 0 && !gameOver) {
      if (timeLeft.toFixed(0) <= 5) {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 0.01);
        }, 10);
      } else {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      }
    }

    return () => clearInterval(timer);
  }, [isClockRunning, gameOver, timeLeft]);
  return <div>{formatTime(timeLeft)}</div>;
};

export default Clock;
