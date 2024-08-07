import { useState } from "react";
import "../styles/Keys.styles.css";
import Key from "./Key.jsx";

function Keys({ onKeyPress }) {
  const [firstLine, setFirstLine] = useState([
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
  ]);
  const [secondLine, setSecondLine] = useState([
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
  ]);
  const [thirdLine, setThirdLine] = useState([
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ]);

  return (
    <div className="keys-background">
      <div className="line-container">
        {firstLine.map((elem, key) => (
          <Key key={key} letter={elem} onKeyPress={onKeyPress} />
        ))}
      </div>
      <div className="line-container">
        {secondLine.map((elem, key) => (
          <Key key={key} letter={elem} onKeyPress={onKeyPress} />
        ))}
      </div>
      <div className="line-container">
        {thirdLine.map((elem, key) => (
          <Key key={key} letter={elem} onKeyPress={onKeyPress} />
        ))}
      </div>
    </div>
  );
}

export default Keys;
