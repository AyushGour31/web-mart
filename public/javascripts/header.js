
const logoImg = document.querySelector('.logo-img');
const biggerHeader = document.querySelector('.bigger-header');
const smallerHeader = document.querySelector('.smaller-header');

biggerHeader.classList.add('hidden');
biggerHeader.classList.add('-translate-x-full');

logoImg.classList.add('animate-spin');
logoImg.addEventListener('mouseover', () => {
    logoImg.classList.remove('animate-spin');
})
logoImg.addEventListener('mouseout', () => {
    logoImg.classList.add('animate-spin');
});

smallerHeader.addEventListener('mouseenter', () => {
    smallerHeader.classList.add('-translate-x-full');
    biggerHeader.classList.remove('hidden');
    smallerHeader.classList.add('hidden');
    biggerHeader.classList.remove('-translate-x-full');    
});

biggerHeader.addEventListener('mouseleave', () => {
    biggerHeader.classList.add('-translate-x-full');
    smallerHeader.classList.remove('hidden');
    biggerHeader.classList.add('hidden');
    smallerHeader.classList.remove('-translate-x-full');
});
