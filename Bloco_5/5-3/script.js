function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

function createDaysWeek() {
  const listNumber = document.getElementById('days');
  const friday = [4, 11, 18, 25];
  const holiday = [24, 25, 31];
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  for (let count = 0; count < dezDaysList.length; count += 1) {
    const numberItem = dezDaysList[count];
    const createdLi = document.createElement('li');
    createdLi.className = 'day';
    createdLi.innerText = numberItem;
    if (friday.find((event) => event === numberItem)) {
      createdLi.className += ' friday';
    }
    if (holiday.find((event) => event === numberItem)) {
      createdLi.className += ' holiday';
    }
    listNumber.appendChild(createdLi);
  }
}

createDaysWeek();

function holidayWeek(holiday) {
  let localeBtn = document.querySelector('.buttons-container');
  let createdBtn = document.createElement('button');
  createdBtn.innerText = holiday;
  createdBtn.id = 'btn-holiday';

  localeBtn.appendChild(createdBtn);
}

holidayWeek('Feriado');
