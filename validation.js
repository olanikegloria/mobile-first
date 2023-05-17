const email = document.getElementById('email');
const form = document.getElementById('form');
const message = document.querySelector('.message');

form.addEventListener('submit', (e) => {   
    const regex = /[A-Z]/;
    if (regex.test(email.value)) {
        e.preventDefault();
        message.style.opacity = 1;
    } else {
        message.style.opacity = 0;
    }

    


})