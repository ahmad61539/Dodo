document.addEventListener('DOMContentLoaded', () => {
    const materiButton = document.getElementById('materiGenre');
    const zahraButton = document.getElementById('talkWithZahra');

    materiButton.addEventListener('click', () => {
        window.location.href = 'materi.html';
    });

    zahraButton.addEventListener('click', () => {
        window.open('https://www.instagram.com/zahraspeaks', '_blank');
    });
});
