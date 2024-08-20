document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simpan data ke Local Storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Tampilkan pesan sukses
    document.getElementById('registerMessage').textContent = 'Registrasi berhasil!';
    document.getElementById('registerForm').reset();
});
