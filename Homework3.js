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

    
    <script>
    document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    
        const name = document.querySelector('input[name="fio"]').value;
        const phoneNumber = document.querySelector('input[name="phone"]').value;
        const dateOfBirth = document.querySelector('input[name="birthday"]').value;
        const emailAddress = document.querySelector('input[name="email"]').value;
    
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


<body>
    <section>
        <h2 class="header">Header</h2>
        <p id="data">DOM - document object model</p>
        <span>Span</span>
        <div>Invisible element</div>
    </section>
    <button id="btn">Add style</button>

    <script>
        document.getElementById("btn").addEventListener("click", function() {
            // Стиль для <h2>
            document.querySelector("h2").style.color = "red";
            document.querySelector("h2").style.textDecoration = "underline";

            // Стиль для <p>
            document.getElementById("data").style.color = "brown";
            document.getElementById("data").style.fontSize = "18px";
            document.getElementById("data").style.fontFamily = "'Comic Sans MS'";

            // Стиль для <span>
            document.querySelector("span").style.color = "green";
            document.querySelector("span").style.fontStyle = "italic";

            // Сховати <div>
            document.querySelector("div").style.display = "none";
        });
    </script>
</body>



Task 3. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

<!DOCTYPE html>
<html lang="uk">
<head>
    <title>Button Events</title>
</head>
<body>


<button id="myButton">Live Button!</button>
<div id="message"></div> <!-- Місце для виведення повідомлень -->


<script>
    const button = document.getElementById('myButton');   //Знаходить кнопку за її id
    const messageDiv = document.getElementById('message');  //елемент для виведення повідомлень

    button.addEventListener('click', function() {     
        messageDiv.textContent = "I was pressed!";
    });

    button.addEventListener('mouseenter', function() {
        messageDiv.textContent = "Mouse on me!";
    });

    button.addEventListener('mouseleave', function() {
        messageDiv.textContent = "Mouse is not on me!";
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
<html lang="en">
<body>

<script>
    document.body.innerHTML = `
    <article class="article postList">
        <div id="container">
            <p>Post 1</p>
            <p>Post 2</p>
            <p>Post 3</p>
        </div>
    </article>`;
</script>

</body>
</html>


Task 5*. Відповідно до заданого мокапу написати простий веб-застосунок (HTML+JS), який дає змогу користувачу ввести дані в поле вводу і по натисканню на кнопку Send опублікувати ці дані на сторінку в DOM із вказанням дати написання. Після успішної публікації - очистити поле вводу без перезавантаження сторінки.

<body>
    <div id="messageContainer"></div>
    <input type="text" id="inputField" placeholder="Write message" />
    <button id="sendButton">Send</button>

    <script>
        document.getElementById("sendButton").addEventListener("click", function() {
            const messageText = document.getElementById("inputField").value.trim();
            if (messageText) {
                const date = new Date();
                const formattedDate = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
                const messageElement = document.createElement("div");
                messageElement.innerHTML = `<p>${messageText}</p><p>${formattedDate}</p>`;
                document.getElementById("messageContainer").appendChild(messageElement);
                document.getElementById("inputField").value = "";
            }
        });
    </script>
</body>
