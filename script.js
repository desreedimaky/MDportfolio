// JavaScript to toggle the navbar on smaller screens
document.getElementById('navbarToggle').addEventListener('click', function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

//Readmore section
function toggleReadMore(event) {
    event.preventDefault();
    const hiddenText = document.querySelector('.hidden-text');
    const readMoreLink = event.target;

    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'inline';
        readMoreLink.textContent = 'Read Less';
    } else {
        hiddenText.style.display = 'none';
        readMoreLink.textContent = 'Read More';
    }
}
