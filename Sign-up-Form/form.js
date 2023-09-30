function onChange() {
    const password = document.querySelector('input[name=userpwd]');
    const confirm = document.querySelector('input[name=userconfpwd]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}


