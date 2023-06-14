
window.onload = function() {
  var submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('¡Mensaje enviado!');
  });
};