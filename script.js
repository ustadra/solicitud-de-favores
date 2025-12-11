// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('favorForm');
  const responseDiv = document.getElementById('response');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
    // Optionally, you could process form data here
    form.classList.add('hidden');
    responseDiv.classList.remove('hidden');
  });
});
