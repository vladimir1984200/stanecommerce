'use strict'

document.addEventListener('DOMContentLoaded', () => {

    let form = document.getElementById('logout');

    if (form) {

        let formData = new FormData(form);
        form.addEventListener('submit', (e) => {

            e.preventDefault();
            fetch('/accounts/logout/', {

                method: 'post',
                body: formData

            })

            e.target.submit();

        });

    }

});