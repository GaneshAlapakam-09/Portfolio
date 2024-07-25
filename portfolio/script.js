
// Update the href attribute
function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    const currentTheme = themeLink.getAttribute('href');
    const newTheme = currentTheme === 'dark.css' ? 'light.css' : 'dark.css';
    themeLink.href = newTheme;

    // update the icons
    const darkmode = document.querySelector("#darkmode");

    darkmode.addEventListener("click", lightAndDarkMode());

    function lightAndDarkMode() {
        const body = document.body;
        if (darkmode.classList.contains("bx-moon")) {
            darkmode.classList.replace("bx-moon", "bx-sun");
        }
        else {
            darkmode.classList.replace("bx-sun", "bx-moon");
        }
    }


}