import React from "react";

const PlayAgain = ({ playable, handleClick }) => {
  return (
    <button
      type='button'
      value={playable}
      onClick={(e) => handleClick(e)}
      className='btn-playagain'
    >
      Try another word
    </button>
  );
};

export default PlayAgain;
