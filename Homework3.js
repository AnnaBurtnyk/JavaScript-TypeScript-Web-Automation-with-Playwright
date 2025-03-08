//Task 1. На сторінці є форма "Новий користувач" із введеними даними користувача.
//Потрібно отримати дані з усіх полів та записати їх у наступні змінні name, phoneNumber, dateOfBirth, emailAddress.


HTML:
<fieldset>
<legend align="center"> Новий користувач </legend>
<input value="Name" type="text" data-form="ПІБ" class="text-data arr" name="fio" placeholder="Введіть ПІБ">
<input value="+380-00-000-0000" type="phone" data-form="Номер телефону" class="arr" name="phone" placeholder="+380-00-000-0000">
<input value="2020-02-02" type="date" data-form="Дата народження" class="arr" name="birthday">
<input value="softserve@softserve.com" type="email" data-form="Електронна пошта" class="arr" placeholder="email@softserveinc.com"
name="email">
<input type="submit" class="btn">
</fieldset>


document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Щоб форма не відправлялася при натисканні кнопки

    let name = document.querySelector('input[name="fio"]').value;
    let phoneNumber = document.querySelector('input[name="phone"]').value;
    let dateOfBirth = document.querySelector('input[name="birthday"]').value;
    let emailAddress = document.querySelector('input[name="email"]').value;

    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Date of Birth:", dateOfBirth);
    console.log("Email Address:", emailAddress);
});



{/* Task 2.
1) стиль вмісту тега <h2>: колір шрифту червоний, шрифт із підкресленням
2) стиль вмісту тега <p>: колір шрифту коричневий, розмір шрифту 18 пс, шрифт сімейства "Comic Sans MS".
3) стиль вмісту тега <span>: колір шрифту зелений, курсив
4) вміст тега <div> не повинен відображатися в браузері.
HTML:
<body>
<section>
<h2 class="header">Header</h2>
<p id ='data'>DOM - document object model </p>
<span>Span</span>
<div>Invisible element</div>
</section>
<button id="btn">Add style</button>
</body>

 */}


Task 3. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Events</title>
</head>
<body>


<button id="myButton">Press</button>

<script>
    const button = document.getElementById('myButton');   //Знайти кнопку за її id

    button.addEventListener('click', function() {     
        console.log("I was pressed!");
    });

    button.addEventListener('mouseenter', function() {
        console.log("Mouse on me!");
    });

    button.addEventListener('mouseleave', function() {
        console.log("Mouse is not on me!");
    });
</script>

</body>
</html>


Task 4. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
<article class="article postList">
<div id="container">
<p>Post 1</p>
<p>Post 2</p>
<p>Post 3</p>
</div>
</article>
</body>



<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Creation</title>
</head>
<body>

<script>
    let article = document.createElement('article');    // Створює елементи
    article.className = 'article postList'; // Додає класи

    let div = document.createElement('div');
    div.id = 'container'; // додаємо id

    let post1 = document.createElement('p');     // Створює абзаци
    post1.textContent = 'Post 1';

    let post2 = document.createElement('p');
    post2.textContent = 'Post 2';

    let post3 = document.createElement('p');
    post3.textContent = 'Post 3';

    div.appendChild(post1);
    div.appendChild(post2);
    div.appendChild(post3);

    article.appendChild(div);     // Додає div в article

    document.body.appendChild(article);     // Додає article в body
</script>

</body>
</html>
