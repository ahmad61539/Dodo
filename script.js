document.addEventListener('DOMContentLoaded', function() {
    // Ensure buttons exist before adding event listeners
    const materiButton = document.getElementById('materiGenre');
    const zahraButton = document.getElementById('talkWithZahra');

    if (materiButton) {
        materiButton.addEventListener('click', function() {
            window.location.href = 'materi.html';
        });
    }

    if (zahraButton) {
        zahraButton.addEventListener('click', function() {
            window.open('https://www.instagram.com/zahrazaliakinantiii/', '_blank');
        });
    }
});