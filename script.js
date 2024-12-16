// Получаем кнопку
const scrollToTopButton = document.getElementById('scrollToTop');

// Функция для проверки положения прокрутки
function toggleScrollButton() {
    if (window.pageYOffset > 300) { // Показываем кнопку после прокрутки на 300px
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
}

// Функция для плавной прокрутки наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Добавляем слушатели событий
window.addEventListener('scroll', toggleScrollButton);
scrollToTopButton.addEventListener('click', scrollToTop);

//---------------------------------------------


