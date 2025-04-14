// Task 1.
// За допомогою Playwright реалізуйте наступний сценарій API-тестування: § Зробіть GET-запит на ендпойнт https://reqres.in/api/users/2
// § Переконайтеся, що запит успішний
// § Переконайтеся, що в тілі відповіді від сервера міститься об’єкт "data" з ключем "first_name" зі значенням "Janet"
// § Переконайтеся, що в тілі відповіді міститься об’єкт "data" з ключем "last_name" зі значенням "Weaver"
// § Переконайтеся, що в тілі відповіді міститься об’єкт "data" з ключем "email" зі значенням "janet.weaver@reqres.in"

import { test, expect } from '@playwright/test';

test('GET user data', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');

  // перевірка чи запит успішний 
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // Перевірка body
  const userData = responseBody.data;
  expect(userData).toHaveProperty('first_name', 'Janet');
  expect(userData).toHaveProperty('last_name', 'Weaver');
  expect(userData).toHaveProperty('email', 'janet.weaver@reqres.in');
});


// Task 2.
// За допомогою Playwright реалізуйте наступний сценарій API-тестування: § Зробіть POST-запит на ендпойнт https://dummyjson.com/posts/add
// § Тіло запиту має містити дані для створення нового поста: поле title зі значенням "Awesome title" та поле userId зі значенням 10
// § Переконайтеся, що POST-запит успішний
// § Переконайтеся за допомогою відповіді від сервера, що створено новий пост, який має title зі значенням "Awesome title"
// § Переконайтеся за допомогою відповіді від сервера, що створено новий пост, який має userId зі значенням 10


test('POST request', async ({ request }) => {
  // Body POST запиту
  const requestBody = {
    title: 'Awesome title',
    userId: 10,
  };

  // POST-запит
  const response = await request.post('https://dummyjson.com/posts/add', {
    data: requestBody,
  });

  // Перевірка статусу респонсу
  expect(response.status()).toBe(200);

  // отримуєм дані з респонсу
  const responseBody = await response.json();

  // перевірка, що створено новий пост
  expect(responseBody).toHaveProperty('title', 'Awesome title');
  expect(responseBody).toHaveProperty('userId', 10);
});



// Task 3*.
// За допомогою Playwright реалізуйте наступний сценарій API-тестування: § Зробіть GET-запит на ендпойнт https://dummyjson.com/products
// § Запит має бути параметризований:
// 1) за допомогою параметра skip=10 потрібно пропустити перших 10 продуктів в відповіді від сервера
// 2) за допомогою параметра limit=5 потрібно обмежити вибірку продуктів 5-ма одиницями
// § Переконайтеся, що отримано лише 5 продуктів
// § Переконайтеся, що поле price 1-го продукту має значення 1899.9
// § Переконайтеся, що поле rating 2-го продукту має значення менше 4
// § Переконайтеся, що поле stock останнього продукту має значення більше 10
// § Переконайтеся, що 1-ий продукт має поле “returnPolicy”


test('GET request', async ({ request }) => {
  // параметри для GET-запиту
  const params = {
    skip: 10,
    limit: 5,
  };

  // GET-запит з параметрами
  const response = await request.get('https://dummyjson.com/products', {
    params,
  });

  // перевірка респонсу
  expect(response.status()).toBe(200);

  // JSON-дані з респонсу
  const responseBody = await response.json();

  // перевірка на 5 продуктів
  const products = responseBody.products;
  expect(products).toHaveLength(5);

  // ціна 1-го продукту має значення 1899.9
  expect(products[0]).toHaveProperty('price', 1899.9);

  // рейтинг 2-го продукту має значення менше 4
  expect(products[1].rating).toBeLessThan(4);

  // перевірка, що поле stock останнього продукту має значення більше 10
  expect(products[products.length - 1]).toHaveProperty('stock');
  expect(products[products.length - 1].stock).toBeGreaterThan(10);

  // перевірка, що 1-ий продукт має поле “returnPolicy”
  expect(products[0]).toHaveProperty('returnPolicy');
});
