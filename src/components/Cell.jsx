import "../styles/Cell.styles.css";

function Cell({ item, showRes }) {
  return (
    <div
      className={
        showRes && item?.guessedLet
          ? "cell-guessed-let"
          : showRes && item?.guessedPos
          ? "cell-guessed-pos"
          : "cell"
      }
      onClick={() => {
        console.log(`content of ${item?.id} is ${item?.content}`);
      }}
    >
      {item?.content}
    </div>
  );
}

export default Cell;
