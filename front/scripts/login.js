let form = document.forms[0];
let email = form.elements.email;
let password = form.elements.password;
let button = form.elements.butt;

console.log(button);
button.addEventListener('click', function() {
  window.electronAPI.login(email.value, password.value)
  document.body = "";
}
