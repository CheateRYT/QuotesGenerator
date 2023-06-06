
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
      quote: "Истина не родилась для нас, мы должны родиться для нее.",
      author: "Ф.М. Достоевский"
    },
    {
      quote: "Самая лучшая инвестиция, это инвестиция в себя.",
      author: "Уоррен Баффет"
    },
    {
      quote: "Не существует пути к успеху. Успех - это сам путь.",
      author: "Конфуций"
    },
    {
      quote: "Развивайтесь каждый день, даже если это всего лишь небольшой шаг.",
      author: "Нил Гейман"
    },
    {
      quote: "Успех приходит к тем, кто продолжает учиться после того, как они закончили школу.",
      author: "Рамит Сети"
    },
    {
      quote: "Образование - это самая мощная валюта, которую вы можете иметь.",
      author: "Мишель Обама"
    },
    {
      quote: "Истина в том, что вы становитесь тем, кем вы занимаетесь.",
      author: "Джим Рон"
    },
    {
      quote: "Постоянное саморазвитие - это ключ к преодолению себя и достижению новых вершин.",
      author: "Брайан Трейси"
    },
    {
      quote: "Инвестируйте в себя. Ваше знание и навыки - ваши наиболее выгодные активы.",
      author: "Пол Б. Фаррелл"
    },
  ];

    let currentQuoteIndex = -1; // Текущий индекс цитаты

    // Функция для получения следующей цитаты
    function getNextQuote() {
      currentQuoteIndex++;
      if (currentQuoteIndex === quotes.length) {
        currentQuoteIndex = 0;
      }

      const quoteContainer = document.getElementById('quoteContainer');
      quoteContainer.innerHTML = '';

      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote');
      quoteElement.innerHTML = `
        <p>"${quotes[currentQuoteIndex].quote}"</p>
        <p>- ${quotes[currentQuoteIndex].author}</p>
      `;

      quoteContainer.appendChild(quoteElement);
    }

    // Обработчик нажатия на кнопку "Следующая цитата"
    document.getElementById('nextButton').addEventListener('click', getNextQuote);

    // Загрузка сохраненной цитаты из local storage
    function loadSavedQuote() {
      const savedQuote = localStorage.getItem('customQuote');
      if (savedQuote) {
        const quoteContainer = document.getElementById('quoteContainer');
        quoteContainer.innerHTML = '';

        const quoteElement = document.createElement('div');
        quoteElement.classList.add('quote');
        quoteElement.innerHTML = `
          <p>"${savedQuote}"</p>
          <p>- Вы</p>
        `;

        quoteContainer.appendChild(quoteElement);

        // Добавление сохраненной цитаты в массив цитат
        quotes.push({
          quote: savedQuote,
          author: 'Вы'
        });
      }
    }

    // Обработчик нажатия на кнопку "Сохранить цитату"
    document.getElementById('saveButton').addEventListener('click', function() {
      const customQuoteInput = document.getElementById('customQuoteInput');
      const customQuote = customQuoteInput.value.trim();

      if (customQuote !== '') {
        localStorage.setItem('customQuote', customQuote);
        customQuoteInput.value = '';

        loadSavedQuote();
      }
    });

    // Запускаем получение первой цитаты и загрузку сохраненной цитаты при загрузке страницы
    getNextQuote();
    loadSavedQuote();