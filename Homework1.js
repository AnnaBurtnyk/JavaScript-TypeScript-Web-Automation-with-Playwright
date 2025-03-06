//+Task 1. Напишіть програму мовою JavaScript, яка перетворює вхідне числове значення в стрінгу, яка містить відповідну кількість годин і хвилин.
//Приклад роботи:
//inputValue = 82;
//result: 1:22

let inputValue = 82;
let hours = Math.floor(inputValue / 60); //Math.floor для заокруглення вниз, бо  інакше виходить 1.3666666666666667:22
let minutes = inputValue % 60;

let result = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; //для правильного формату додає нуль перед однозначними числами, бо вийде 1:2222
console.log(result);  // Виведе: 1:22



//+Task 2. Напишіть програму мовою JavaScript, яка пропонує юзеру ввести два числових значення (використати prompt()).
//Розрахувати суму, різницю, добуток і частку введених значень та вивести отримані результати.
//У випадку, якщо різниця вийшла від’ємною – результат потрібно перетворити в додатній.

//щоб в браузері вискочив попап
let number1 = parseFloat(prompt("Введіть перше число:"));
let number2 = parseFloat(prompt("Введіть друге число:"));

let sum = number1 + number2;
let difference = Math.abs(number1 - number2);  // Від’ємне переведе в додатне
let product = number1 * number2;
let quotient = num1 / num2 

// Виводимо результати
alert(`sum: ${sum}`);
alert(`difference: ${difference}`);
alert(`product: ${product}`);
alert(`quotient: ${quotient}`);


//+Task 3. Заданий такий код:
 let x = 1;
 let y = 2;
 let res1 = " "+x+y// Допишіть код, необхідно використовувати змінні x і y
 console.log(res1); // "12"
 console.log(typeof res1); // "string"

 let res2 =  ((x < y) +"" + 2);// Допишіть код, необхідно використовувати змінні x і y
 console.log(res2); // "true2"
 console.log(typeof res2); // "string"

 let res3 = x < y // Допишіть код, необхідно використовувати змінні x і y
 console.log(res3); // true
 console.log(typeof res3); // "boolean"

 let res4 = "x" * y// Допишіть код, необхідно використовувати змінні x і y
 console.log(res4); // NaN
 console.log(typeof res4); // "number"

//Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.


//+Task 4. Написати умовну конструкцію, яка в залежності від значення набраного балу по 100-бальній шкалі, виводитиме відповідний результат. Зробити 2-ма різними способами через 2 різних умовних оператора.
//Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
//Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied!”
//Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
//Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
//Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!”

//1st example with if
let score = prompt("Enter your score:");
if (score >= 0 && score <= 49) 
{console.log("Unsatisfied!");
} else if (score >= 50 && score <= 70) 
{console.log("Satisfied!");
} else if (score >= 71 && score <= 87) 
{console.log("Good!");
} else if (score >= 88 && score <= 100) {
console.log("Excellent!");} 
else 
{console.log("Incorrect assessment!!");}

//2nd example with switch
let score = prompt("Enter your score:");
switch (true) {
    case (score >= 0 && score <= 49):
        console.log("Unsatisfied!");
        break;
    case (score >= 50 && score <= 70):
        console.log("Satisfied!");
        break;
    case (score >= 71 && score <= 87):
        console.log("Good!");
        break;
    case (score >= 88 && score <= 100):
        console.log("Excellent!");
        break;
    default:
        console.log("Incorrect assessment!!");
}

//+Task 5. Напишіть програму на JavaScript, яка ітерується цілими числами від 1 до 50.
//Для числа, кратного двом потрібно додатково виводити " kratne 2!".
//Для числа, кратного чотирьом потрібно додатково виводити " kratne 4!".
//Для чисел, кратних двом і чотирьом, виведіть " kratne 2 & 4!".
//Приклад роботи для перших 8-ми чисел діапазону:
1
2 kratne 2!
3
4 kratne 2 & 4!
5
6 kratne 2!
7
8 kratne 2 & 4!

for (let i = 1; i <= 50; i++) {
    let number = i;  
    //спочатку перевірити одночасно кратне 2 і 4, бо буде повертати лише кратне 2 :((
    if (i % 2 === 0 && i % 4 === 0) { // %-оператор залишку 
        number += " kratne 2 & 4!";  
    } else if (i % 2 === 0) {
        number += " kratne 2!";  
    } else if (i % 4 === 0) {
        number += " kratne 4!";  
    }
    console.log(number);  
}


