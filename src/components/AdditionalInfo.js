import React from "react";

const AdditionalInfo = ({ playable, hiddenWord }) => {
  return (
    <aside className='info'>
      <p>{hiddenWord.definition}</p>
    </aside>
  );
};

export default AdditionalInfo;
