'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('login');
    if (form) {
        let formData = new FormData(form);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            fetch('/accounts/login/',{
                method: 'post',
                body: formData
            })
            e.target.submit();
        });
    }
});