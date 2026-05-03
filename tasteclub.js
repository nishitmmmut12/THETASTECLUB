// Custom Cursor Movement
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Scroll Reveal Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Navbar Scroll Effect
window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0,0,0,0.9)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '30px 8%';
    }
};

// Modal Logic
function toggleModal() {
    const modal = document.getElementById('reserve-modal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

// Initial Call
reveal();