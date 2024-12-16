// Задание 9.1: Приветствие
function greeting() {
    // Объявляем переменные для хранения имени и возраста
    let name = prompt("Введите ваше имя:");
    let age = prompt("Введите ваш возраст:");
    
    // Создаем приветственное сообщение
    let message = `Привет, ${name}! Вам ${age} лет.`;
    
    // Выводим сообщение в alert и консоль
    alert(message);
    console.log(message);
}

// Задание 9.2: Проверка возраста
function checkAge() {
    let name = prompt("Введите ваше имя:");
    let age = parseInt(prompt("Введите ваш возраст:"));
    
    // Создаем базовое сообщение
    let message = `Привет, ${name}! Вам ${age} лет.`;
    
    // Проверяем возраст с помощью логического оператора
    let isAdult = age >= 18;
    let ageMessage = isAdult ? "Вы совершеннолетний" : "Вы несовершеннолетний";
    
    // Выводим все сообщения
    alert(message);
    alert(ageMessage);
    console.log(message);
    console.log(ageMessage);
}

// Задание 9.3: Угадай число
function guessNumber() {
    // Генерируем случайное число от 1 до 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    // Запрашиваем число у пользователя
    let userGuess = parseInt(prompt("Угадайте число от 1 до 10:"));
    
    // Проверяем угадал ли пользователь
    if (userGuess === randomNumber) {
        alert("Поздравляем! Вы угадали число!");
    } else {
        // Проверяем, больше или меньше 5
        let message = userGuess < 5 ? 
            "Введенное число меньше 5" : 
            "Введенное число больше 5";
        alert(message);
    }
    
    console.log(`Загаданное число было: ${randomNumber}`);
}

// Задание 9.4: Проверка пароля
function checkPassword() {
    // Задаем правильный пароль
    const correctPassword = "12345";
    
    // Запрашиваем пароль у пользователя
    let userPassword = prompt("Введите пароль:");
    
    // Проверяем что пароль не пустой и совпадает с правильным
    if (userPassword && userPassword === correctPassword) {
        alert("Доступ разрешен");
        console.log("Успешная авторизация");
    } else {
        alert("Доступ запрещен");
        console.log("Неудачная попытка входа");
    }
}

// Задание 9.5: Простой калькулятор
function calculator() {
    // Получаем ввод от пользователя
    let num1 = parseFloat(prompt("Введите первое число:"));
    let num2 = parseFloat(prompt("Введите второе число:"));
    let operator = prompt("Введите оператор (+, -, *, /):");
    
    let result;
    
    // Проверяем корректность ввода и выполняем операцию
    if (!isNaN(num1) && !isNaN(num2)) {
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Деление на ноль невозможно";
                break;
            default:
                result = "Неверный оператор";
        }
        
        // Выводим результат
        alert(`Результат: ${result}`);
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    } else {
        alert("Пожалуйста, введите корректные числа");
    }
}



// Задание 10.1: Объявление переменных и условные операторы
function checkAge2() {
    // Создаем переменные для хранения имени и возраста
    const name = "Саня";  
    const age = 19;       
    
    // console.log(`Имя: ${name}`);
    // console.log(`Возраст: ${age}`);
    
    // Проверяем возраст с помощью условного оператора
    if (age >= 18) {
        console.log("Вы совершеннолетний");
    } else {
        console.log("Вы несовершеннолетний");
    }
}

// Задание 10.2: Циклы
function numbersOutput() {
    // Цикл for для вывода чисел от 1 до 10
    console.log("Числа от 1 до 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    
    // Цикл while для вывода чисел в обратном порядке
    console.log("Числа от 10 до 1:");
    let num = 10;
    while (num >= 1) {
        console.log(num);
        num--;
    }
}

// Задание 10.3: Работа с массивами
function workWithArrays() {
    // Создаем массивы для тем лекций и практик
    const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
    const practices = ['Практика 1', 'Практика 2', 'Практика 3'];
    
    // Добавляем новые элементы в массивы
    lectures.push('Тема 4');           // Добавляем в конец массива
    practices.unshift('Практика 0');   // Добавляем в начало массива
    
    // Выводим темы лекций с помощью forEach
    console.log("Темы лекций:");
    lectures.forEach(lecture => {
        console.log(lecture);
    });
    
    // Выводим темы практик с помощью forEach
    console.log("Темы практик:");
    practices.forEach(practice => {
        console.log(practice);
    });
    
    // Функция для вывода элементов массива через запятую
    function arrayToString(arr) {
        return arr.join(', ');
    }
    
    // Демонстрация работы функции
    console.log("Лекции в строку:", arrayToString(lectures));
    console.log("Практики в строку:", arrayToString(practices));
}

// Задание 10.4: Манипуляции с массивами
function filterArrayByLetter() {
    // Создаем тестовый массив с темами
    const lectures = [
        'Основы JavaScript',
        'Типы данных',
        'Объекты и массивы',
        'Операторы условий',
        'Основы DOM'
    ];
    
    // Функция фильтрации тем, начинающихся на "О"
    function filterByO(arr) {
        return arr.filter(item => item.startsWith('О'));
    }
    
    // Выводим исходный массив
    console.log("Исходный массив:");
    console.log(lectures);
    
    // Выводим отфильтрованный массив
    console.log("Темы, начинающиеся на 'О':");
    console.log(filterByO(lectures));
}

// Можно сделать запуск всех функций сразу
// console.log("=== Задание 1 ===");
// checkAge();

// console.log("\n=== Задание 2 ===");
// numbersOutput();

// console.log("\n=== Задание 3 ===");
// workWithArrays();

// console.log("\n=== Задание 4 ===");
// filterArrayByLetter();