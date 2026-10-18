'use strict'

document.addEventListener('DOMContentLoaded', () => {

    let form = document.getElementById('register');

    if (form) {
        
        let formData = new FormData(form)
        form.addEventListener('submit', (e) => {

            e.preventDefault();
            fetch('/accounts/register/', {
                method: 'post',
                body: formData
            })
            e.target.submit();

        });

    }

});