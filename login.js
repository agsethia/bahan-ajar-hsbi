document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi login
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginMessage').textContent = 'Username atau password salah!';
    }
});
