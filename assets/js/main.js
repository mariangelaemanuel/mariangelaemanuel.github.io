// === 1. COUNTDOWN TIMER ===
// Imposta qui la data del matrimonio (Formato: YYYY-MM-DDTHH:MM:SS)
const weddingDate = new Date("2027-06-20T11:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<div class='col-span-4 text-white text-xl font-serif'>Oggi è il gran giorno! ❤️</div>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// === 2. COPIA IBAN IN APPUNTI ===
function copyIBAN() {
    const ibanText = document.getElementById("iban-text").innerText;
    navigator.clipboard.writeText(ibanText).then(() => {
        const msg = document.getElementById("copy-msg");
        msg.classList.remove("opacity-0");
        setTimeout(() => {
            msg.classList.add("opacity-0");
        }, 2500);
    });
}
