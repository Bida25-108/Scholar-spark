document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.96)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);
        });
    });
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    const subscribeForm = document.querySelector(".newsletter form");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function () {
            alert("Thanks for subscribing to Scholar Spark!");
        });
    }
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            alert("Your message has been sent successfully!");
        });
    }
});