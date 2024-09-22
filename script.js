const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');

noButton.style.transition = 'all 0.5s ease'; // Add transition for smooth movement

// Function to move the "No" button to a random position
const moveButton = () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Width - button width
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50)); // Height - button height

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
};

// Use mouseover for desktop and touchstart for mobile
noButton.addEventListener('mouseover', moveButton);
noButton.addEventListener('touchstart', moveButton);

// Pop-up on "Yes" button click
yesButton.addEventListener('click', () => {
    alert("I love you baby");
});
