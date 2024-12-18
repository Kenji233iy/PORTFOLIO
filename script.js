document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const button = document.querySelector('button');

    // Lock scroll initially
    body.classList.add('lock-scroll');

    button.addEventListener('click', function() {
        // Unlock scroll on button click
        body.classList.remove('lock-scroll');
    });
});
