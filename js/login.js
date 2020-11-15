// Login

let userEmailInput = document.getElementById('user-email');
let userPasswordInput = document.getElementById('user-password');

let alertEmail = document.getElementById('alert-email');
let alertPassword = document.getElementById('alert-password');

let submit = document.getElementById('send-form');
let validationFormArray = [userEmailInput, userPasswordInput];
let alertFormArray = [alertEmail, alertPassword];



userEmailInput.addEventListener('keyup', function () {
    let regex = /^[a-z]{3,10}@[a-z]{2,10}\.com$/;
    if (regex.test(this.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        alertEmail.classList.replace('d-block', 'd-none');
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        alertEmail.classList.replace('d-none', 'd-block');
    }
});

userPasswordInput.addEventListener('keyup', function () {
    let regex = /^[a-z]{3,10}$/;
    if (regex.test(this.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        alertPassword.classList.replace('d-block', 'd-none');
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        alertPassword.classList.replace('d-none', 'd-block');
    }
});

submit.addEventListener('click', function (e) {
    for (let i = 0; i < validationFormArray.length; i++) {
        if (validationFormArray[i].classList.contains('is-invalid')
            || validationFormArray[i].value == ``) {
            alertFormArray[i].classList.replace('d-none', 'd-block')
            validationFormArray[i].focus();
            e.preventDefault();
            return;
        }
    }
});