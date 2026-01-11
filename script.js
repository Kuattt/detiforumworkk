// Таймер
const timer = document.getElementById("timer");
const eventDate = new Date("2026-04-25T10:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        timer.innerText = "Форум начался";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    timer.innerText = `${days} дн ${hours} ч ${minutes} мин`;
}, 1000);

// Popup
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

setTimeout(() => {
    popup.style.display = "flex";
}, 7000);

closePopup.onclick = () => {
    popup.style.display = "none";
};
