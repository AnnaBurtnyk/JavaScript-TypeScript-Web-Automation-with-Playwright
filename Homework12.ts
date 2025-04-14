// Task 1.
// За допомогою Playwright реалізуйте наступний тестовий сценарій: § Перейдіть на веб-сайт https://the-internet.herokuapp.com/login
// § Введіть в поле Username або/і поле Password невалідні дані і натисніть на кнопку Login
// § Переконайтеся, що вам не вдалося залогувалися
// § Введіть в поле Username значення tomsmith
// § Введіть в поле Password значення SuperSecretPassword!
// § Натисніть на кнопку Login.
// § Переконайтеся, що ви успішно залогувалися
// § Вилогуйтеся натиснувши кнопку Logout
// § Переконайтеся, що ви успішно вилогувалися

import { test, expect } from '@playwright/test';

test('Login and logout', async ({ page }) => {
  // перехід на сторінку 
  await page.goto('https://the-internet.herokuapp.com/login');

  // введення невалідних даних
  await page.fill('#username', 'invalidName');
  await page.fill('#password', 'invalidPassword');
  await page.click('button[type="submit"]');

  // перевірка, що не вдалося залогуватися
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');

  // логін з валідними даними
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // перевірка, що вдалося залогуватися
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');

  // логаут
  await page.click('a[href="/logout"]');

  // перевірка, що успішно вилогувалися
  await expect(page.locator('.flash.success')).toContainText('You logged out of the secure area!');
});

// Task 2.
// За допомогою Playwright реалізуйте наступний тестовий сценарій: § Перейдіть на веб-сайт https://demo.guru99.com/test/radio.htm
// § Активуйте всі наявні на сторінці чекбокси Checkbox1, Checkbox2, Checkbox3
// § Переконайтеся, що всі чекбокси відмічені
// § Деактивуйте всі наявні на сторінці чекбокси Checkbox1, Checkbox2, Checkbox3
// § Переконайтеся, що всі чекбокси не відмічені

test('Checkboxes', async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/radio.html');
  
    // масив із селекторами чекбоксів
    const checkboxes = ['#vfb-6-0', '#vfb-6-1', '#vfb-6-2'];
  
    // активація чекбоксів
    for (const selector of checkboxes) {
      await page.check(selector);
      await expect(page.locator(selector)).toBeChecked();
    }
  
    // деактивація чекбоксів
    for (const selector of checkboxes) {
      await page.uncheck(selector);
      await expect(page.locator(selector)).not.toBeChecked();
    }
  });


//   Task 3
// За допомогою Playwright реалізуйте наступний тестовий сценарій:
// § Перейдіть на веб-сайт https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select
// § Перейдіть до iframe із спадним меню
// § У спадному списку виберіть опцію "Saab"
// § Переконайтеся, що вибрано «Saab»
// § Натисніть кнопку Submit
// § Переконайтеся, що форма відпрацювала

test('Select saab option', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');

  // перехід до iframe
  const frame = page.frameLocator('#iframeResult');

  // вибір опції "Saab" у спадному меню
  await frame.locator('select').selectOption('saab');

  // перевірка, що вибрано саме "Saab"
  await expect(frame.locator('select')).toHaveValue('saab');

  // натискання кнопки Submit
  await frame.locator('input[type="submit"]').click();

  // перевірка, що форма відпрацювала — очікуємо текст із результатом
  await expect(frame.locator('body')).toContainText('cars=saab');
});


// Task 4.
// За допомогою Playwright реалізуйте наступний тестовий сценарій: § Перейдіть на веб-сайт http://formy-project.herokuapp.com/form
// § Заповніть текстове поле “First name” значенням “Sam”
// § Заповніть текстове поле “Last name” значенням “Robertson”
// § Заповніть текстове поле “Job title” значенням “Test Automation Engineer”
// § Для радіо-батона “Highest level of education” обрати значення “College”
// § Для чекбокса “Sex” обрати значення “Male”
// § Для випадаючого списку “Years of experience:” обрати значення “5-9”
// § Для поля “Date” ввести значення “14/12/2024”.
// § Натиснути кнопку Submit
// § Перевірити, що після відправлення форми з’являється повідомлення 'The form was successfully submitted!'

import { test, expect } from '@playwright/test';

test('Different tests on formy-project.herokuapp.com', async ({ page }) => {
  await page.goto('http://formy-project.herokuapp.com/form');

  // заповнення текстових полів
  await page.fill('#first-name', 'Sam');
  await page.fill('#last-name', 'Robertson');
  await page.fill('#job-title', 'Test Automation Engineer');

  // вибір radio-кнопки: College
  await page.check('#radio-button-2');

  // вибір checkbox: Male
  await page.check('#checkbox-1');

  // вибір з дропдауну: 5-9
  await page.selectOption('select', '2'); 

  // введення дати
  await page.fill('#datepicker', '14/12/2024');

  // Submit
  await page.click('.btn.btn-lg.btn-primary');

  // перевірка результату
  await expect(page.locator('.alert')).toHaveText('The form was successfully submitted!');
});


