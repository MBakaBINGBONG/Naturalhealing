const darkLightToggleButton = document.querySelector(".toggle-mode");

darkLightToggleButton.addEventListener('click', () => {
    const header = document.querySelector("header");
    header.classList.toggle("dark-mode");
});