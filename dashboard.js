// Cek apakah user sudah login
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Fungsi logout
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});
