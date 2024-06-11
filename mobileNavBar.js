document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-links').classList.add('show');
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('nav-links').classList.remove('show');
});
