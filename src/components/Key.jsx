import "../styles/Key.styles.css";
import { useState } from "react";

function Key({ letter, onKeyPress }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div
      className={isPressed ? "key-pressed" : "key"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={() => onKeyPress(letter)}
    >
      {letter}
    </div>
  );
}

export default Key;
