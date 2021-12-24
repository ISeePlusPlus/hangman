import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <section className='wrong-letters-container'>
      <div>
        {wrongLetters.length > 0 && <h3>Wrong letters</h3>}
        {wrongLetters
          .map((letter, index) => {
            return <span key={index}>{letter}</span>;
          })
          .reduce((totalWrong, currentLetter) => {
            return totalWrong === null
              ? [currentLetter]
              : [totalWrong, ",", currentLetter];
          }, null)}
      </div>
    </section>
  );
};

export default WrongLetters;
