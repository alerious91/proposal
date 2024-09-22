const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');

noButton.style.transition = 'all 0.5s ease'; // Add transition for smooth movement

noButton.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Width - button width
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // Height - button height

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', () => {
    alert("I love you baby");
});
