let isPlaying = false;
let kelopakInterval = null;

document.addEventListener("DOMContentLoaded", function () {
  window.toggleMusic = function () {
    const lagu = document.getElementById('lagu');
    const tombol = document.querySelector('button');

    if (!isPlaying) {
      lagu.play();
      tombol.textContent = 'Pause';
      mulaiKelopak();
    } else {
      lagu.pause();
      tombol.textContent = 'Play';
      berhentiKelopak();
    }

    isPlaying = !isPlaying;
  };
});

function mulaiKelopak() {
  kelopakInterval = setInterval(() => {
    const kelopak = document.createElement("img");
    kelopak.src = "Mawar.png";
    kelopak.classList.add("kelopak");

    kelopak.style.left = Math.random() * 100 + "vw";
    kelopak.style.top = "-100px";
    kelopak.style.animationDuration = 7 + Math.random() * 4 + "s";
    kelopak.style.width = 40 + Math.random() * 20 + "px";

    document.body.appendChild(kelopak);

    setTimeout(() => {
      kelopak.remove();
    }, 12000);
  }, 1000);
}

function berhentiKelopak() {
  clearInterval(kelopakInterval);
  // Jika mau bersihkan kelopak yang masih jatuh:
  document.querySelectorAll('.kelopak').forEach(k => k.remove());
}
