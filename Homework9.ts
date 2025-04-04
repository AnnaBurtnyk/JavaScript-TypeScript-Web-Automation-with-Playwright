// Task 1. Створіть функцію superSort(arr, direction), яка приймає масив рядків arr і напрямок сортування direction з двома можливими значеннями: «asc» і «desc». Функція повертає відсортований масив як копію.
// Створіть type alias SortFunction для цієї функції.

// Приклад роботи:
// const names = ["Vlad", "Ira", "Nina", "Alex"];
// console.log(superSort(names, "asc"));
// // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]
// const func: SortFunction = superSort;
// const result = func(["A", "C", "D", "B"], "desc");
// console.log(result);
// // [ 'D', 'C', 'B', 'A' ]


type SortDirection = "asc" | "desc";

type SortFunction = (arr: string[], direction: SortDirection) => string[]; // тип функції

function superSort(arr: string[], direction: SortDirection): string[] {
  const copy = [...arr]; // створює копію масиву

  if (direction === "asc") {
    copy.sort(); // сортування за зростанням
  } else {
    copy.sort();
    copy.reverse(); // сортування за спаданням
  }

  return copy;
}

// Приклад використання
const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc")); // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result); // [ 'D', 'C', 'B', 'A' ]


// Task 2. Створіть інтерфейс Parcel для представлення сутності в системі доставки посилок.
// Посилка містить такі властивості:
// § id: ціле число, яке не можна змінити
// § weight: плаваюче значення
// § dimensions: інтерфейс «Dimensions».
// § description: необов'язкове значення
// § sender: може зберігати ідентифікаційний номер відправника або повне ім'я
// § status: enum `PackageStatus`
// § deliver: функція
// § statusName: геттер.
// Функція deliver() приймає логічний параметр isSuccess, без значення, що повертається.
// Геттер statusName() повертає назву статусу посилки у вигляді рядка.
// Інтерфейс Dimensions складається з length, width та height, усі з яких можуть бути числами з плаваючою комою.
// Enum PackageStatus має такі можливі значення: Pending, InTransit, Delivered, Lost.
// Приклад роботи:
// const item: Parcel = {
// id: 224,
// weight: 22.5,
// dimensions: {
// length: 105,
// width: 44,
// height: 50.5
// },
// sender: "Nick Scot",
// description: "Super power inside.",
// status: PackageStatus.Pending,
// deliver(isSuccess) {
// this.status = isSuccess
// ? PackageStatus.Delivered
// : PackageStatus.Lost;
// },
// get statusName() {
// return PackageStatus[this.status];
// }
// }
// item.deliver(true);
// console.log(item.statusName); // Delivered

  
  // Інтерфейс для розмірів посилки
  interface Dimensions {
    length: number;
    width: number;
    height: number;
  }

  // Створення Enum для статусів посилки
enum PackageStatus {
    Pending = "Pending",
    InTransit = "InTransit",
    Delivered = "Delivered",
    Lost = "Lost"
  }
  
  // Інтерфейс для опису посилки
  interface Parcel {
    id: number;
    weight: number;
    dimensions: Dimensions;
    description?: string;  
    sender: string | number;
    status: PackageStatus;
    deliver(isSuccess: boolean): void; // змінює статус
    statusName: string;  // геттер для статусу
  }
  
//Код з таски:
  const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
      length: 105,
      width: 44,
      height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
  
    deliver(isSuccess: boolean) {
      if (isSuccess) {
        this.status = PackageStatus.Delivered;
      } else {
        this.status = PackageStatus.Lost;
      }
    },
      get statusName() {
      return this.status;  
    }
  };
  
  // Тестування
  item.deliver(true);  // Статус зміниться на "Delivered"
  console.log(item.statusName);  // Виведе: "Delivered"
  