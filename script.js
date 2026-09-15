/* =========================================
   SORRY WEBSITE - JAVASCRIPT
========================================= */

const sorryBtn = document.getElementById("sorryBtn");
const finalBtn = document.getElementById("finalBtn");
const surprise = document.getElementById("surprise");


/* =========================================
   READ MESSAGE
========================================= */

sorryBtn.addEventListener("click", function () {

    const messageSection =
        document.getElementById("message");

    messageSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   FINAL SURPRISE
========================================= */

finalBtn.addEventListener("click", function () {

    surprise.innerHTML = "";

    const message = document.createElement("p");

    message.textContent =
        "Nunu, I hope this little message brings a smile to your face. ❤️";

    surprise.appendChild(message);

    createHearts();

    finalBtn.textContent =
        "Thank You For Reading, Nunu ❤️";

    finalBtn.disabled = true;

    finalBtn.style.opacity = "0.8";

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.textContent = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            "heartFloat 3s ease-out forwards";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 3000);

    }

}


/* =========================================
   HEART ANIMATION
========================================= */

const style = document.createElement("style");

style.textContent = `

@keyframes heartFloat {

    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }

    50% {
        opacity: 0.9;
    }

    100% {
        transform:
            translateY(-100vh)
            rotate(25deg)
            scale(1.4);

        opacity: 0;
    }

}

`;

document.head.appendChild(style);


/* =========================================
   NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================================
   CARD REVEAL
========================================= */

const cards =
    document.querySelectorAll(
        ".info-card, .message-card, .promise-box, .final-card"
    );


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(card);

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    "❤️ Sorry website for Nunu loaded successfully!"
);