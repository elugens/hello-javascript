// Details Open/Close Functions
function openDetails() {
  let details = document.querySelectorAll('details');
  details.forEach((detail) => {
    detail.open = true;
  });
}

function closeDetails() {
  let details = document.querySelectorAll('details');
  details.forEach((detail) => {
    detail.open = false;
  });
}
