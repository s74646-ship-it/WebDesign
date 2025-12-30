// 4. Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    setTimeout(showSlides, 3000);
}

// 6. Progress Bar
let progress = 0;
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');

function updateProgress() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';
        setTimeout(updateProgress, 40);
    }
}

// 7. FAQ
function toggleFAQ() {
    const content = document.getElementById('faq-content');
    const button = document.querySelector('#faq button');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    button.textContent = content.style.display === 'block' ? 'Hide FAQ' : 'Show FAQ';
}

// Start everything
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    updateProgress();
});