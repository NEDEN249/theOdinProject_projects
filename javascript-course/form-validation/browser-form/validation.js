const validEmailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Australian post codes should be 4 digits long
const postCodeReg = /^\d{4}$/;
const passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const postCode = document.querySelector('#postCode');
const country = document.querySelector('#country');
const error = document.querySelector('#error');

window.onload = () => {
    email.onchange = validateEmail;
    postCode.onchange = validatePostCode;
    password.onchange = validatePassword;
    password2.onchange = validateConfirmPassword;
};

//setCustomValidaty() is a method of the HTML5 Constraint Validation API
const validateEmail = () => {
    if (!validEmailReg.test(email.value) || email.value === '') {
        email.setCustomValidity('Please enter a valid email address');
    } else {
        email.setCustomValidity('');
    }
}

//show a customised error message if email input is invalid
email.addEventListener('input', (event) => {
    if (email.validity.valid){
        error.textContent = '';
        error.className = 'error';
    }else{
        showEmailError();
    }
});


//show a customised error message if email input is invalid based off of the validity property
function showEmailError() {
    if (email.validity.valueMissing) {
        error.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        error.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        error.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    error.className = 'error active';
}


const validatePostCode = () => {
    if (!postCodeReg.test(postCode.value) || postCode.value === '') {
        postCode.setCustomValidity('Please enter a valid post code');
    } else {
        postCode.setCustomValidity('');
    }
}

const validatePassword = () => {
    if (!passwordReg.test(password.value) || password.value === '') {
        password.setCustomValidity('Please enter a valid password. Must contain special characters, numbers and be between 6 and 16 characters long');
    } else {
        password.setCustomValidity('');
    }
}

const validateConfirmPassword = () => {
    if (password.value !== password2.value) {
        password2.setCustomValidity('Passwords do not match');
    } else {
        password2.setCustomValidity('');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
    validatePostCode();
    validatePassword();
    validateConfirmPassword();
    if (form.checkValidity()) {
        alert('Form submitted');
        form.reset();
    }
});



