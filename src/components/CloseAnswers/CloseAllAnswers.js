import { useState } from 'react';
import React from 'react';

export default function CloseAllAnswers() {
  const closeAnswers = () => {
    window.location.reload(false);
  };
  return (
    <div className='closeAnswersContainer' onClick={closeAnswers}>
      <button className='closeAnswers'>Close Answers [X]</button>
    </div>
  );
}

// export default CloseAllAnswers;
