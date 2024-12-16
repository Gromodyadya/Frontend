// Часть 1: DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    // 1. Найти и изменить заголовок H1
    const mainHeading = document.getElementById('mainHeading');
    mainHeading.textContent = 'Добро пожаловать на наш сайт!';

    // 2. Изменить цвет текста заголовка H2
    const secondHeading = document.getElementById('secondHeading');
    secondHeading.style.color = 'red';

    // 3. Изменить текст первого параграфа
    const firstParagraph = document.getElementById('firstParagraph');
    firstParagraph.textContent = 'Это новый текст параграфа.';

    // 4. Скрыть встроенное видео
    const hiddenVideo = document.getElementById('hiddenVideo');
    hiddenVideo.style.display = 'none';

    // Часть 2: Работа с объектами
    const formData = {
        name: '',
        email: '',
        phone: '',
        date: '',
        comment: '',

        printData: function() {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    // Часть 3: Обработчик формы
    const form = document.getElementById('dataForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const comment = document.getElementById('comment').value;

        // Проверки
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d+$/;

        if (!name || !email || !comment) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert('Телефон должен содержать только цифры');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Некорректный формат email');
            return;
        }

        // Заполнение объекта
        formData.name = name;
        formData.email = email;
        formData.phone = phone;
        formData.date = date;
        formData.comment = comment;

        // Вывод данных в консоль
        formData.printData();

        // Очистка формы
        form.reset();
    });
});

// 1. Функция showMessage
function showMessage(message) {
    console.log(message);
}

// Дополнительная функция logCurrentTime
function logCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

showMessage("Скрипт загружен!");
logCurrentTime();


// Дополнительная функция resetBackgroundColor
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}


// 2. Функция changeBackgroundColor
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// 3. Функция toggleVisibility
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
    }
}

// 4. Функция для работы с utm_term
function handleUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');

    if (utmTerm && h1) {
        h1.textContent = utmTerm;
    }
}


// Вызовы функций после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility(".content"); // Убедитесь, что у вас есть элемент с классом .content
    handleUtmTerm();
});

//?utm_term=Эта%20надпись%20появилась%20из-за%20utm 