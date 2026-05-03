// Function for Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// Modal Toggle Logic
function toggleModal() {
    const modal = document.getElementById('reserve-modal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Ensure first reveal check on load
reveal();
