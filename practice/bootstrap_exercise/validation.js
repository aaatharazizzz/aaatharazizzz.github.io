

(() => {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')
    var to_validate = document.querySelectorAll('.to-validate')
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if(!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            to_validate.forEach((group) => {
                group.classList.add('was-validated')
            }
            )
        }, false)
    })
})()