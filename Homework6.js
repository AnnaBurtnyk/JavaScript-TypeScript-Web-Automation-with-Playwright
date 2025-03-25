// Task 1. Створіть простий HTTP-сервер за допомогою Node.js, який слухатиме запити на порт 5000.
// Сервер має відповідати на різні маршрути наступним чином:
// / - відповідь вітальним повідомленням "Welcome to the new Server!"
// /about - у відповідь надайте інформацію про сервер "This is a simple http Node.js server".
// /contact - у відповідь укажіть контактну інформацію, наприклад "Contact us at contact@newserver.com".
// Будь-який інший маршрут повинен відповісти кодом статусу 404 і повідомленням на зразок "Page not found!".
// Переконайтеся, що використовуєте лише нативні модулі Node.js (без зовнішніх бібліотек).
// Приклад роботи при переході в браузері на http://127.0.0.1:5000/about:
// Приклад роботи при переході в браузері на http://127.0.0.1:5000/invalidPath:

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/') {
        res.writeHead(200);
        res.end('Welcome to the new Server!');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('This is a simple http Node.js server');
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end('Contact us at contact@newserver.com');
    } else {
        res.writeHead(404);
        res.end('Page not found!');
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}/`);
});


http://127.0.0.1:5000/
http://127.0.0.1:5000/about
http://127.0.0.1:5000/contact
http://127.0.0.1:5000/test123


Task 2*. Створіть Node.js HTTP-сервер, який читає та обслуговує вміст файлу.
Сервер повинен відповісти на наступне:
/file?name=<ім'я_файлу> - відповідь із вмістом зазначеного файлу, якщо він існує. Якщо файл не знайдено, у відповідь введіть код статусу 404 і повідомлення «File not found!».
Створіть в директорії з файлом сервера, файл data.txt з довільним вмістом. Відповідно, у випадку, коли введено URL-адресу /file?name=data.txt, сервер має прочитати та відповісти вмістом файлу data.txt.
Будь-який інший маршрут повинен відповісти кодом статусу 404 і повідомленням "Invalid route!".
Використовуйте лише нативні модулі Node.js.
Приклад роботи при переході в браузері на http://localhost:5000/file?name=data.txt
Приклад роботи при переході в браузері на http://localhost:5000/file?name=info.txt
Приклад роботи при переході в браузері на невалідний маршрут http://localhost:5000/download


const http = require('http');
const fs = require('fs');

const PORT = 5000;

const server = http.createServer(function (req, res) {
    if (req.url.startsWith('/file?name=')) {
        const fileName = req.url.split('=')[1]; // отримуємо ім'я файлу з URL

        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' }); // помилка якщо файл не знайдено
                res.end('File not found!');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' }); // виводимо його вміст файлу, якщо його знайдено

                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' }); // якщо запит не на /file, виводимо помилку

        res.end('Invalid route!');
    }
});

server.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT}`);
});


// http://localhost:5000/file?name=data.txt
// http://localhost:5000/file?name=info.txt
// http://localhost:5000/download