// Task 1.
// Напишіть тест Playwright, який виконує такі дії:
// § Перейдіть на веб-сайт https://example.com/.
// § Переконайтеся, що назва сторінки "Example Domain" за допомогою toBe().
// § Переконайтеся, що URL-адреса сторінки містить підрядок "example.com", використовуючи toContain().
// § Переконайтеся, що сторінка містить текст «This domain is for use in illustrative examples» за допомогою toMatch().
// § Переконайтеся, що текст елемента <h1> точно відповідає "Example Domain", використовуючи toHaveText()

import { test, expect } from '@playwright/test';

test('Validation of Example.com page', async ({ page }) => {
  await page.goto('https://example.com/');

  await expect(page).toHaveTitle('Example Domain');

  expect(page.url()).toContain('example.com');

  await expect(page.locator('body')).toMatch(/This domain is for use in illustrative examples/);

  await expect(page.locator('h1')).toHaveText('Example Domain');
});


// Task 2.
// Напишіть тест Playwright, який виконує такі дії:
// § Перейдіть на домашню сторінку Playwright https://playwright.dev/
// § Переконайтеся, що URL-адреса сторінки починається з "https://playwright.dev", використовуючи startsWith().
// § Переконайтеся, що сторінка містить посилання з текстом «Get started», використовуючи toHaveCount().


test('Playwright homepage', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  expect(page.url().startsWith('https://playwright.dev')).toBe(true);

  // Перевірка, що на сторінці є хоча б одне посилання з текстом Get started
  const getStartedLinks = page.locator('a', { hasText: 'Get started' });
  await expect(getStartedLinks).toHaveCount(1); 
});


// Task 3.
// Створіть тест за допомогою Playwright, який виконує такі дії:
// § Перейти на сайт https://www.google.com.
// § Знайти поле пошуку і ввести в нього пошуковий запит "Playwright"
// § Надіслати пошуковий запит, активувавши відповідну кнопку
// § Перевірити, чи пошуковий запит успішний на сторінці із результатами пошуку


test('Google search for Playwright', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.fill('input[name="q"]', 'Playwright');

  await page.keyboard.press('Enter');

  const results = page.locator('#search');
  await expect(results).toBeVisible();

  const firstResult = page.locator('h3');
  await expect(firstResult.first()).toContainText('Playwright');
});


// Task 4.
// Створіть тест за допомогою Playwright, який виконує такі дії:
// § Перейдіть на домашню сторінку Playwright https://playwright.dev/ .
// § Переконайтеся, що в назві сторінки є слово «Playwright».
// § Натисніть на домашній сторінці посилання «Get started».
// § Переконайтеся, що URL-адреса нової сторінки містить /docs.

test('Playwright page validation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  await page.click('text=Get started');

  await expect(page).toHaveURL(/\/docs/);
});
