const livespan = () => {
  const todaysDate = new Date();
  const todaysDateOutput = document.querySelector('.livespan-modal__date-todays');
  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const monthInputArr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  const daysInMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];

  // Вывод текущей даты
  todaysDateOutput.textContent = todaysDate.getDate() + " " + monthArr[todaysDate.getMonth()] + " " + todaysDate.getFullYear() + ' года.';

  // добабление сегодняшних данных в инпут
  let yaerInput = todaysDate.getFullYear();
  let monthInput = monthInputArr[todaysDate.getMonth()];
  let dateInput = todaysDate.getDate();

  // Создание массивов с годами и числами
  const yaerArr = [];
  for (let i = yaerInput - 100; i <= yaerInput; i++) {
    yaerArr.unshift(i)
  };

  const dataArr = [];
  for (let i = 1; i <= 31; i++) {
    dataArr.push(i)
  };

  // вставка года в разметку
  for (let i = 0; i < yaerArr.length; i++) {
    document.querySelector('.livespan-modal-dateofbirth__yaer-input').innerHTML += `
      <option class="livespan-modal-dateofbirth__yaer-select" value="${yaerArr[i]}">${yaerArr[i]}</option>
    `;
  }

  // вставка месяцев в разметку
  for (let i = 0; i < monthInputArr.length; i++) {
    document.querySelector('.livespan-modal-dateofbirth__month-input').innerHTML += `
    <option class="livespan-modal-dateofbirth__month-select" value="${i + 1}">${monthInputArr[i]}</option>
    `;
  }


  // вставляем количество дней в разметку
  function daysMonthInHtml(dataLength = 31) {
    document.querySelector('.livespan-modal-dateofbirth__day-input').innerHTML = '';
    for (let i = 0; i < dataLength; i++) {
      document.querySelector('.livespan-modal-dateofbirth__day-input').innerHTML += `
    <option class="livespan-modal-dateofbirth__day-select" value="${dataArr[i]}">${dataArr[i]}</option>
    `;
    }
  }

  daysMonthInHtml();

  // Добавляем Выокостные года в массив
  const leapYearArr = [];
  let leapYearFevral = 28;
  for (let i = 1920; i <= yaerInput; i = i + 4) {
    leapYearArr.push(i);
    if (yaerInput == i) {
      daysInMonth[1] = '29';
    }
  }

  // Проверяем высокостный год
  document.querySelector('.livespan-modal-dateofbirth__yaer-input').addEventListener('change', function (event) {
    for (let i = 0; i < leapYearArr.length; i++) {
      if (leapYearArr[i] == event.target.value) {
        // console.log(event.target.value, leapYearArr[i]);
        leapYearFevral = 29;
      } else {
        leapYearFevral = 28;
      }
    }
  })

  // слушаем select и изменяем количество дней в месяце
  document.querySelector('.livespan-modal-dateofbirth__month-input').addEventListener('change', function (e) {
    const targetValue = +e.target.value;
    if (targetValue === 2) {
      daysMonthInHtml(leapYearFevral);
    } else {
      if (targetValue === 4 || targetValue === 6 || targetValue === 9 || targetValue === 11) {
        daysMonthInHtml(30);
      } else {
        daysMonthInHtml(31);
      }
    }
  });




  // получение данных из формы
  const form = document.querySelector('.livespan-modal__form');
  form.addEventListener('submit', getFormValue);

  function getFormValue(event) {
    event.preventDefault();
    const formOutput = document.querySelector('.livespan-modal-dateofbirth__yaer-input').value + '/' + document.querySelector('.livespan-modal-dateofbirth__month-input').value + '/' + document.querySelector('.livespan-modal-dateofbirth__day-input').value;


    // Вычисляем и выводим годы
    const dateOfBirth = new Date(formOutput);
    const deltaDate = todaysDate - dateOfBirth;

    if (deltaDate > 0) {
      // Высокосные года количество

      let leapYear = 0;

      for (let i = 0; i < leapYearArr.length; i++) {
        for (let j = document.querySelector('.livespan-modal-dateofbirth__yaer-input').value; j < yaerInput; j++) {
          if (leapYearArr[i] == j) {
            leapYear++;
          }
        }
      }


      const finalYear = Math.floor(deltaDate / 1000 / 60 / 60 / 24 / 365);
      let finalDays = Math.floor((deltaDate / 1000 / 60 / 60 / 24) % 365) - leapYear;
      let finalMonth = 0;


      document.querySelector('.livespan-modal-output__yaer-output').textContent = finalYear;

      // считаем месяцы и дни
      let monthNumber = todaysDate.getMonth();
      for (let i = 0; i < 12; i++) {
        monthNumber--;
        if (monthNumber === -1) {
          monthNumber = 11;
        }

        if (finalDays >= daysInMonth[monthNumber]) {
          finalDays = finalDays - daysInMonth[monthNumber];
          finalMonth++;
        } else {
          i = 12;
        }


        document.querySelector('.livespan-modal-output__month-output').textContent = finalMonth;
        document.querySelector('.livespan-modal-output__day-output').textContent = finalDays;
      }

      // Правим подписи к годам
      const textYear = document.querySelector('.livespan-modal-output__year-text');
      const lastNumberFinalYear = +String(finalYear).slice(-1);
      if (lastNumberFinalYear === 1 && finalYear !== 11) {
        textYear.textContent = 'год';
      } else {
        if (lastNumberFinalYear >= 2 && lastNumberFinalYear <= 4 && finalYear !== 12 && finalYear !== 13 && finalYear !== 14) {
          textYear.textContent = 'года';
        } else {
          textYear.textContent = 'лет';
        }
      }

      // Подпись к месяцам
      const textMonth = document.querySelector('.livespan-modal-output__month-text');
      if (finalMonth === 1) {
        textMonth.textContent = 'месяц';
      } else {
        if (finalMonth >= 2 && finalMonth <= 4) {
          textMonth.textContent = 'месяца';
        } else {
          textMonth.textContent = 'месяцев';

        }
      }

      // Подпись к дням
      const textDay = document.querySelector('.livespan-modal-output__day-text')
      const lastNumberFinalDay = +String(finalDays).slice(-1)
      if (lastNumberFinalDay === 1 && finalDays !== 11) {
        textDay.textContent = 'день';
      } else {
        if (lastNumberFinalDay >= 2 && lastNumberFinalDay <= 4 && finalDays != 12 && finalDays != 13 && finalDays != 14) {
          textDay.textContent = 'дня';
        } else {
          textDay.textContent = 'дней';
        }
      }
    }
  }

};

export default livespan;