   // Массив с цитатами саморазвития
   const quotes = [
    {
      quote: "Саморазвитие - это ключ к достижению своих целей.",
      author: "Аноним"
    },
    {
      quote: "Учиться всю жизнь - значит жить на полную мощность.",
      author: "Лу Холц"
    },
    {
      quote: "Ваше развитие - это ваше лучшее вложение.",
      author: "Джим Рон"
    },
    {
      quote: "Не ограничивайте свои цели - ограничивайте только свое время.",
      author: "Майкл Фаррис"
    },
    {
      quote: "Саморазвитие начинается с преодоления комфортной зоны.",
      author: "Ник Вуйчич"
    },
    {
      quote: "Нет предела для роста и самосовершенствования человека.",
      author: "Луций Анней Сенека"
    },
    {
      quote: "Чтение - это дорога к знаниям, а знания - это ключ к успеху.",
      author: "Наполеон Хилл"
    },
  ];

  // Функция для получения случайной цитаты из массива
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteContainer = document.getElementById('quoteContainer');

    const quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');
    quoteElement.innerHTML = `
      <p>"${randomQuote.quote}"</p>
      <p>- ${randomQuote.author}</p>
    `;

    quoteContainer.appendChild(quoteElement);
  }

  // Запускаем получение случайной цитаты при загрузке страницы
  getRandomQuote();