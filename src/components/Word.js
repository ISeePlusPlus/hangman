import React from "react";

const Word = ({ hiddenWord, correctLetters, playable, isWin }) => {
  return (
    <div className='word'>
      {hiddenWord.word.split("").map((letter, index) => {
        return (
          <span
            className={`letter ${
              correctLetters.includes(letter) ? "" : "red"
            } ${isWin ? "green" : ""}`}
            key={index}
          >
            {correctLetters.includes(letter)
              ? letter
              : "" || !playable
              ? letter
              : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;

//{`letter ${playable ? "" : "red"}`}
