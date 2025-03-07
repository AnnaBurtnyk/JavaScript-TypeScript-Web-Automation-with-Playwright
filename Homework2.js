//Task 1+. Реалізуйте функцію processData(num1, num2, action), яка приймає числові параметри num1, num2 і повертає результат їх обчислення в залежності від значення параметра action.
//У випадку якщо:
//- action=”sum” функція має повернути суму
//- action=”product” функція має повернути добуток
//- action=”square” функція має повернути num1 в степені num2
//За замовчуванням num1 і num2 рівні 0, а action ”sum”.
//Приклад роботи:
//console.log(processData(10, 4, ”product”)); // 40

function processData(num1 = 0, num2 = 0, action = "sum") {
    switch (action) {
        case "sum":
            return num1 + num2;
        case "product":
            return num1 * num2;
        case "square":
            return Math.pow(num1, num2);
    }
}
//Наприклад
console.log(processData(15, 3, "product")); // 45
console.log(processData(15, 10, "sum")); // 25


// Task 2+. Реалізуйте функцію findElem(arr, el), яка приймає параметри arr - масив і el - елемент. Функція має визначити чи міститься елемент el в масиві arr, і повертати відповідне булеве значення.
// Приклад роботи:
// const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
// console.log(findElem(arr, 7)); // false
// console.log(findElem(arr, "Alex")); // true

function findElem(arr, el) {
    return arr.includes(el);
}
// Приклади з вправи:
const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7)); // false
console.log(findElem(arr, "Alex")); // true


// Task 3. Реалізуйте функцію deleteItem(arr, item), яка приймає параметри arr - масив і item – елемент масиву. Функція має видаляти елемент item з масиву arr, і повертати вихідний масив, який не містить цього елемента.
// Приклад роботи:
// console.log(deleteItem([3, 12, 16, 19, 21, 33], 16)); // [3, 12, 19, 21, 33]

function deleteItem(arr, item) {
    return arr.filter(el => el !== item); //filter повертає новий масив відповідно до умови
}
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16)); // [3, 12, 19, 21, 33]
//інший приклад
console.log(deleteItem([3, 12, 16, 19, 21, 33], 3)); // [12, 16, 19, 21, 33]


// Task 4+. Реалізуйте функцію getCircleLength(r), яка приймає параметр r - радіус кола і обчислює його довжину. Передбачити припинення виконання програми і генерацію помилки у випадку, якщо функції передано не числовий або менший-рівний 0 параметр.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
// Приклад роботи:
// getCircleLength(“five”); // “Incorrect radius - please, enter a positive numeric value!”

function getCircleLength(r) {
    if (isNaN(r)) { //чи r число
        return "Incorrect radius - please, enter a positive numeric value!";
    }
    if (r <= 0) {
        return "Incorrect radius - please, enter a positive numeric value!";
    }
    return (2 * 3.14 * r).toFixed(1);; // Формула довжини кола + довелось додати toFixed, бо повертає багато знаків після коми
}

// Приклад використання функції
console.log(getCircleLength("five"));  //Incorrect radius - please, enter a positive numeric value!
console.log(getCircleLength(5));  


// +Task 5. Реалізуйте функцію checkID(), яка пропонуватиме користувачу ввести власне ID. Валідні ID знаходяться в діапазоні від 1 до 1000.
// Функція має генерувати в модальному вікні помилки у випадку, коли:
// - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your ID”),
// - нечислове значення
// - ID знаходиться поза межами коректного діапазону.
// Якщо ID валідне юзер отримує відповідне сповіщення.
// В блокові catch передбачити виведення назви і опису помилки.

function checkID() {
    let Id = prompt("Please enter your ID:");

    if (Id === "") {    
        alert("The field is empty! Please enter your ID.");
        return;
    }

    Id = Number(Id); //Чи введено числове значення
    if (isNaN(Id)) {
        alert("Field value is not a number! Please enter a valid numeric ID.");
        return;
    }

    if (Id < 1) {
        alert("Please enter a value greater than or equal 1.");
        return;
    }

    if (Id > 1000) {
        alert("Please enter a value less than or equal 1000.");
        return;
    }

    alert("Your ID is valid!");
}

checkID();


// +Task 6*. Реалізуйте функцію findArrDiff(arr1, arr2), яка приймає числові масиви arr1, arr2 і повертає масив чисел, які не повторюються у вихідних масивах.
// Приклад роботи:
// console.log(difference([5, 10, 20], [0, 10, 20, 30])); // ["5", "0", "30"]

function findArrDiff(arr1, arr2) {
    let difference = [];
    for (let i = 0; i < arr1.length; i++) { // Перевірка на елементи в arr1, яких немає в arr2
        if (!arr2.includes(arr1[i])) {
            difference.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) { // Перевірка на елементи в arr2, яких немає в arr1

        if (!arr1.includes(arr2[i])) {
            difference.push(arr2[i]);
        }
    }
    return difference;
}
// Приклад роботи
console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30])); // [5, 0, 30]
