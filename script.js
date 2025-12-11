// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('favorForm');
  const responseDiv = document.getElementById('response');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default submission

    // Send email via FormSubmit.co
    fetch('https://formsubmit.co/ajax/ustadra@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        nombre: form.nombre.value,
        favor: form.favor.value
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Error:', error));

    // Show the meme response immediately
    form.classList.add('hidden');
    responseDiv.classList.remove('hidden');
  });
});
