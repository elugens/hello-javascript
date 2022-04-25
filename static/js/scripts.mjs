'use strict';

export function closeDetails() {
  const details = document.querySelectorAll('details');
  const targetCloseAnswers = document
    .getElementsByClassName('closeAnswers')
    .addEventListener('click', () => {
      details.forEach((detail) => {
        if ((detail.open = true)) {
          detail.open = false;
          detail.dataset.collapsed = true;
        }
      });
    });

  return targetCloseAnswers;
}
