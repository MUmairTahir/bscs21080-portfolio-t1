document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const scrollThreshold = 100;

    function updateNavVisibility() {
        const scrollTop = window.scrollY;
        if (nav) {
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                nav.classList.add("hidden");
                nav.classList.remove("visible");
            } else {
                nav.classList.add("visible");
                nav.classList.remove("hidden");
            }
            lastScrollTop = Math.max(scrollTop, 0);
        }
    }

    let lastScrollTop = 0;
    window.addEventListener("scroll", updateNavVisibility);

    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slideContainer = document.querySelector(".slide-container");
    let slideIndex = 0;

    function updateSlidePosition() {
        const slides = document.querySelectorAll(".project-card");
        if (slides.length > 0) {
            const slideWidth = slides[0].offsetWidth;
            slideContainer.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
        }
    }

    function showNextSlide() {
        const slides = document.querySelectorAll(".project-card");
        if (slides.length > 0) {
            slideIndex = (slideIndex + 1) % slides.length;
            updateSlidePosition();
        }
    }

    function showPrevSlide() {
        const slides = document.querySelectorAll(".project-card");
        if (slides.length > 0) {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", showPrevSlide);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", showNextSlide);
    }

    const langButtons = document.getElementById("languageButtons");

    function changeLanguage(language) {
        const welcomeMessageElement = document.getElementById("welcomeMessage");
        const messages = {
            en: "Hi! I am Umair<br>Welcome to my portfolio",
            ar: "مرحبًا! أنا عمير<br>أهلاً بكم في محفظتي",
            fr: "Salut ! Je suis Umair<br>Bienvenue sur mon portfolio"
        };

        if (welcomeMessageElement) {
            welcomeMessageElement.innerHTML = messages[language] || messages.en;
        }
    }

    if (langButtons) {
        document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
        document.getElementById("lang-ar").addEventListener("click", () => changeLanguage("ar"));
        document.getElementById("lang-fr").addEventListener("click", () => changeLanguage("fr"));
    }
});
