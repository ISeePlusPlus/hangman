import React from "react";

const LettersBar = ({ letters, handleClick, correctLetters, wrongLetters }) => {
  return (
    <section className='btn-container'>
      {letters.map((letter, index) => {
        return (
          <button
            key={index}
            value={letter}
            onClick={(e) => handleClick(e)}
            type='button'
            disabled={
              correctLetters.includes(letter) || wrongLetters.includes(letter)
                ? "true"
                : ""
            }
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
};

export default LettersBar;
