(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        let name = document.getElementById('validationCustom01').value;
        let phoneNum = document.getElementById('validationCustom02').value;
        let email = document.getElementById('validationCustomUsername').value;
        let personNum = document.getElementById('validationCustom03').value;
        let queries = document.getElementById('validationCustom05').value;

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else if (name && phoneNum && email && personNum && queries) {
          event.preventDefault(); 
          window.location.href = "/index.html"; 
        }

        form.classList.add('was-validated');
      }, false);
    });
})();
