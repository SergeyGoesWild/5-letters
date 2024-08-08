import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell";
import Keys from "./components/Keys.jsx";
import "react-simple-keyboard/build/css/index.css";
import generateWord from "./assets/generateWord.js";
import listOfWords from "./assets/listOfWords.js";

function App() {
  const [mainWord, setMainWord] = useState(generateWord(listOfWords));
  const [guessingWords, setGuessingWords] = useState([[], [], [], [], []]);
  const [showRes, setShowRes] = useState([false, false, false, false, false]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    console.log("WORD TO GUESS ---> ", mainWord);
  }, []);

  const keyboardLayouts = {
    default: ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"],
  };

  const onChange = (input) => {
    // console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    if (!gameOver) {
      console.log("KEEEEEEEEEEEEEEY ->>>", button);
      const objToAdd = {
        id: currentIndex,
        content: button,
        guessedLet: false,
        guessedPos: false,
      };

      if (button === mainWord[currentIndex]) {
        objToAdd.guessedPos = true;
      } else if (mainWord.includes(button)) {
        objToAdd.guessedLet = true;
      }

      const firstPart = guessingWords.slice(0, currentRow);
      const secondPart = guessingWords.slice(currentRow + 1);
      const middlePart = [...guessingWords[currentRow], objToAdd];
      const newState = [...firstPart, middlePart, ...secondPart];
      const newIndex = currentIndex + 1;
      setGuessingWords(newState);
      setCurrentIndex(newIndex);
      if (newIndex === 5) {
        const fromShowRes = [...showRes];
        fromShowRes[currentRow] = true;
        console.log(fromShowRes);
        setShowRes([...fromShowRes]);
        console.log("going to CHECK");
        checkResult(newState);
      }
    }
  };

  const checkResult = (currentWord) => {
    let valueFromWord = currentWord[currentRow].map((item) => item.content);
    console.log("1.", JSON.stringify(valueFromWord));
    console.log("2.", JSON.stringify(mainWord));
    if (JSON.stringify(valueFromWord) === JSON.stringify(mainWord)) {
      setGameOver(true);
      setHasWon(true);
      setCurrentIndex(0);
    } else if (currentRow < 4) {
      setCurrentRow((prevValue) => prevValue + 1);
      setCurrentIndex(0);
    } else {
      console.log("game over");
      setGameOver(true);
      setCurrentRow(6);
    }
  };

  const restart = () => {
    let newWord = generateWord(listOfWords);
    setMainWord(newWord);
    console.log("WORD TO GUESS ---> ", newWord);
    setGuessingWords([[], [], [], [], []]);
    setShowRes([false, false, false, false, false]);
    setCurrentRow(0);
    setCurrentIndex(0);
    setGameOver(false);
    setHasWon(false);
  };

  return (
    <div className="container-main">
      <div
        className={gameOver ? "container-vertical-go" : "container-vertical"}
      >
        {mainWord.map((char, indexRow) => (
          <div
            className={
              currentRow === indexRow
                ? "container-horizontal-active"
                : "container-horizontal"
            }
            key={indexRow}
          >
            {mainWord.map((char, index) => (
              <Cell
                item={guessingWords[indexRow][index]}
                showRes={showRes[indexRow]}
                key={index}
              />
            ))}
          </div>
        ))}
        <div className="result-container">
          {gameOver && (
            <>
              <h2>You {hasWon ? "won" : "lost"}!</h2>
              <button className="restart-button" onClick={restart}>
                Restart
              </button>
            </>
          )}
        </div>
      </div>

      <div className="keys">
        <Keys onKeyPress={onKeyPress} />
      </div>
    </div>
  );
}

export default App;
