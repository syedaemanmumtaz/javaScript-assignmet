document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('submittedData').innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
});
