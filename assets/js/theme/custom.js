$(document).ready(function () {
    document.querySelectorAll('.heroCarousel-content').forEach(slide => {
        const font = slide.getAttribute('data-font');
        if (font) {
            slide.querySelector('.heroCarousel-title').style.fontFamily = `${font}, sans-serif`;
        }
    });
});
