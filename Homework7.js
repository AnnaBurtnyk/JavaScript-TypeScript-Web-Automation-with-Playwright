// Task 1. Використовуючи регулярні вирази реалізуйте функцію removeSpaces(text), яка приймає стрінговий параметр text і прибирає пробіли на початку і в кінці рядка та повертає змінену стрінгу.
// Приклад роботи:
// console.log(removeSpaces(' textWithSpaces '));
// // “textWithSpaces”
// console.log(removeSpaces(' more text with spaces '));
// // “more text with spaces”


function removeSpaces(text) {
    return text.trim();
}

console.log(removeSpaces('      textWithSpaces      ')); // "textWithSpaces"
console.log(removeSpaces('        more text with spaces         ')); // "more text with spaces"


// Task 2. Реалізуйте за допомогою ругулярних виразів функцію findCapitalWords(sentence), яка приймає речення sentence і повертає масив усіх слів, які починаються з великої літери.
// Приклад роботи:
// console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));
// // ["The", "Quick", "Brown", "Fox", "Lazy", "Dog"]
// console.log(findCapitalWords("no capital letter here"));
// // [

function findCapitalWords(sentence) {
    let capitalWords = sentence.match(/\b[A-Z][a-z]*\b/g); //sentence.match шукає всі слова у рядку, \b — межа слова (word boundary), g — глобальний прапор (global flag), дозволяє шукати всі збіги у рядку, а не тільки перше
    return capitalWords || []; // Якщо нічого не знайдено, повертаємо порожній масив
}

console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog")); // ["The", "Quick", "Brown", "Fox", "Lazy", "Dog"]
console.log(findCapitalWords("no capital letter here")); // []


// Task 3. Використовуючи регулярні вирази реалізуйте функцію getLetterCount(text), яка приймає стрінговий параметр text та повертає об’єкт, ключами якого є літери, які зустрічається в тексті text, а значеннями кількість повторень відповідної літери.
// Приклад роботи:
// console.log(getLetterCount("banana"));
// // { b: 1, a: 3, n: 2 }
// console.log(getLetterCount("The short text"));
// // { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }


function getLetterCount(text) {
    let letterCount = {}; //для зберігання кількості літер

    let letters = text.match(/[a-zA-Z]/g); // перетворює текст на масив літер

    // Якщо літери знайдені, підраховуємо їх
    if (letters) {
        letters.forEach(letter => {
            letter = letter.toLowerCase(); // перетворює літеру на маленьку
            letterCount[letter] = (letterCount[letter] || 0) + 1; // Збільшуємо лічильник для кожної літери
        });
    }

    return letterCount;
}

console.log(getLetterCount("banana"));
// { b: 1, a: 3, n: 2 }

console.log(getLetterCount("The short text"));
// { t: 4, h: 2, e: 2, s: 1, o: 1, r: 1, x: 1 }


Task 4. На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається асинхронний GET-запит на публічний API
https://fakestoreapi.com/users, виводяться всі емейли користувачів у вигляді списку на HTML-сторінку.
Передбачте обробку помилок у випадку збою мережі

