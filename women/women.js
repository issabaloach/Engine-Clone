document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('[data-carousel="static"]');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    let currentIndex = 0;
    const intervalTime = 3000; // 3 seconds

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            indicators[i].classList.toggle('bg-white', i === index);
            indicators[i].classList.toggle('bg-gray-400', i !== index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    document.querySelector('[data-carousel-prev]').addEventListener('click', previousSlide);
    document.querySelector('[data-carousel-next]').addEventListener('click', nextSlide);
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(i);
        });
    });

    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
});
