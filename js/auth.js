
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        alert('Login Successfully!');
        window.location.href = 'index.html';
    });
}

if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        const form = document.getElementById('register-form');

        if (form.checkValidity()) {
            alert('Registered Successfully!');
            window.location.href = 'index.html';
        } else {
            form.reportValidity();
        }
    });
}
