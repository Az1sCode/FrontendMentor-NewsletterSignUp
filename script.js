const form = document.getElementById('form');
const email = document.querySelector('.input-email');
const labelEMail = email.previousElementSibling;
const btnDismiss = document.getElementById('btn-dismiss');

email.addEventListener('invalid', (e) => {
    if (e.target.validity.typeMismatch || e.target.validity.valueMissing) {
        e.target.setCustomValidity(' ');
        email.classList.add('invalid');
        labelEMail.classList.add('active');
    } else {
        email.classList.remove('invalid');
        labelEMail.classList.remove('active');
    }
})

email.addEventListener('input', () => {
    email.classList.remove('invalid');
    labelEMail.classList.remove('active');
})

form.addEventListener('submit', (e) => {
    
    const containerNewsletter = document.querySelector('.container-newsletter');
    containerNewsletter.style.display = 'none';

    const containerSuccess = document.querySelector('.container-success');
    containerSuccess.style.display = 'flex';

    getEmail(email.value)

    e.preventDefault();
});

const getEmail = (emailValue) => {
    const emailInput = document.getElementById('email-input');
    emailInput.innerHTML = `<b>${emailValue}</b>`
};