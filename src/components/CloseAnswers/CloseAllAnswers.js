import { useState } from 'react';
import React from 'react';

const CloseAllAnswers = () => {
  const closeAnswers = () => {
    window.location.reload(false);
  };
  return (
    <div className='closeAnswersContainer'>
      <button className='closeAnswers' onClick={closeAnswers}>
        Close Answers [X]
      </button>
    </div>
  );

  // export const CloseAllAnswers2 = () => {
  //   const closeAnswers = () => {
  //     const close = document.querySelector('.closeAnswers');
  //     const details = document.querySelectorAll('details');
  //     const detailsChildDiv = document.querySelectorAll(
  //       'details div:nth-child(1)'
  //     );
  //     // Add the onclick listeners.
  //     details.forEach((targetDetail) => {
  //       close.addEventListener('click', () => {
  //         // Close all the details that are not targetDetail.
  //         details.forEach((detail) => {
  //           if (detail !== targetDetail) {
  //             detail.removeAttribute('open');
  //             detail.dataset.collapsed = true;
  //             detailsChildDiv.style =
  //               'display: none; overflow: hidden; height: 0px;';
  //           }
  //         });

  // detailsChildDiv.forEach((detailChild) => {
  //   if (detailChild !== targetDetail) {
  //     detailChild
  //   }
  // });
  //     });
  //   });
  // };

  // return (
  //   <div className='closeAnswersContainer'>
  //     <button className='closeAnswers' onClick={closeAnswers}>
  //       Close Answers [X]
  //     </button>
  //   </div>
  // );
};

export default CloseAllAnswers;
