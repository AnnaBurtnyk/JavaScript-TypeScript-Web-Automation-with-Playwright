// Task 1. Створіть функцію display(), яку можна викликати трьома різними способами за допомогою техніки перевантаження.

// Перевантаження 1: приймає один стрінговий параметр і друкує його.
// Перевантаження 2: приймає два стрінгових параметри та друкує їх в окремих рядках.
// Перевантаження 3: приймає масив стрінгів і друкує кожен рядок у новому рядку.
// Приклад роботи:
// display("Hello, World!"); // Hello, World!

// display("Hello", "World!"); // Hello

// World!

// display(["Hello", "World", "!"]); // Hello

// World

// !


function display(arg1: string): void;
function display(arg1: string, arg2: string): void;
function display(arg1: string[]): void;
function display(arg1: any, arg2?: any): void {
  if (typeof arg1 === "string" && typeof arg2 === "undefined") {
    // Перевантаження 1: один стрінговий параметр
    console.log(arg1);
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    // Перевантаження 2: два стрінгових параметри
    console.log(arg1);
    console.log(arg2);
  } else if (Array.isArray(arg1)) {
    // Перевантаження 3: масив стрінгів
    for (let item of arg1) {
      console.log(item);
    }
  }
}

display("Hello, World!");         // Перевантаження 1
display("Hello", "World!");       // Перевантаження 2
display(["Hello", "World", "!"]); // Перевантаження 3


// Task 2. Створіть дженерік функцію identity(), яка приймає масив як аргумент.
// Кожен елемент масиву повинен задовольняти умову: мати поле рейтингу rating
// Функція identity() має повертати середнє значення рейтингів у масиві.
// Приклад роботи:
// console.log(identity([{name: "Anna", rating: 3}])) // 3
// console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}])) // 4

function identity<T extends { rating: number }>(items: T[]): number {
    if (items.length === 0) return 0;
    let sum = 0;
    for (let item of items) {
      sum += item.rating;
    }
    return sum / items.length;
  }
  // Приклади :
  console.log(identity([{ name: "Anna", rating: 3 }])); // 3
  console.log(identity([{ title: "Encounter", rating: 3 }, { title: "Dead to me", rating: 4 }, { title: "Riverdale", rating: 5 }])); // 4


//   Task 3*. Створіть декоратор withEmploymentDate, який додає поле EmploymentDate зі значенням 2024-04-12 до класу, з яким воно використовується.
// Використовуйте створений декоратор з класом Manager.
// class Manager {
// task: string = 'Simple task'
// project: string = 'Simple project'
// constructor(){
// console.log('Initializing the Manager class')
// }
// }
// Приклад роботи:
// const manager = new Manager();
// console.log(manager);
// // Output
// { "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z" }

// Створення декоратора
function withEmploymentDate(constructor: Function) {
    return class extends constructor {
      employmentDate = new Date("2024-04-12");
    };
  }  
 // Клас Manager з декоратором
@withEmploymentDate
class Manager {
  task: string = 'Simple task';
  project: string = 'Simple project';

  constructor() {
    console.log("Initializing the Manager class");
  }
}
//  Приклад роботи:
const manager = new Manager();
console.log(manager);
// Output
//{ "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z" }
