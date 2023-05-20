const emailInput = document.getElementById('email');
const form = document.getElementById('form');
const message = document.querySelector('.message');

form.addEventListener('submit', (e) => {
  const regex = /[A-Z]/;
  if (regex.test(emailInput.value)) {
    e.preventDefault();
    message.style.opacity = 1;
  } else {
    message.style.opacity = 0;
  }
});