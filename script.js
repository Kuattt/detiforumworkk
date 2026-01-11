// Таймер
const timer = document.getElementById("timer");
const eventDate = new Date("2026-04-25T10:00:00").getTime();

setInterval(() => {
    const now = Date.now();
    const diff = eventDate - now;

    if (diff <= 0) {
        timer.textContent = "Форум уже начался";
        return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;

    timer.textContent = `${d} дней ${h} часов ${m} минут`;
}, 1000);

// Popup
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

setTimeout(() => popup.style.display = "flex", 6000);
closePopup.onclick = () => popup.style.display = "none";

// Анимация при скролле
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.animation = "fadeUp 1s ease forwards";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .speaker, .benefits li")
    .forEach(el => observer.observe(el));
