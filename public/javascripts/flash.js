
// flash box
document.addEventListener('DOMContentLoaded', function() {
    const flashSuccess = document.getElementById('flashSuccess');
    const flashError = document.getElementById('flashError');

    if (flashSuccess) {
        flashSuccess.classList.add('right-12');
        flashSuccess.classList.remove('translate-x-full');
        setTimeout(() => {
            flashSuccess.classList.add('right-0');
            flashSuccess.classList.remove('right-12');
            flashSuccess.classList.add('translate-x-full');
        }, 3000);
    }
    
    if (flashError) {
        flashError.classList.add('right-12');
        flashError.classList.remove('translate-x-full');
        setTimeout(() => {
            flashError.classList.add('right-0');
            flashError.classList.remove('right-12');
            flashError.classList.add('translate-x-full');
        }, 3000);
    }
});

