import "../styles/Key.styles.css";
import { useState } from "react";

function Key({ letter, onKeyPress, gameOver }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div
      className={gameOver ? "key-inactive" : isPressed ? "key-pressed" : "key"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={() => onKeyPress(letter)}
    >
      {letter}
    </div>
  );
}

export default Key;
