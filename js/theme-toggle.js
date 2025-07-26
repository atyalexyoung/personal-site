document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleTheme");
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "Go to light mode... ☀️";
    } else {
        if (toggleBtn) toggleBtn.textContent = "Come to the darkside... 🌙";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle("dark-mode");
            toggleBtn.textContent = isDark
                ? 'Go to light mode... ☀️'
                : 'Come to the dark side... 🌙'

            localStorage.setItem("theme", isDark ? "dark" : "light")
        });
    }

    const content = document.getElementById("page-content");
    if (content) {
        // Ensure opacity 0 is applied first
        content.classList.remove("visible");

        // Force reflow before adding visible
        void content.offsetWidth;

        // Now trigger the fade-in
        content.classList.add("visible");
    }
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close dropdown if clicking outside of navLinks or hamburger
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});