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

//exercicio 1
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

//exercicio 2

function createdBtn(name, locale, id) {
  let localeBtn = document.querySelector(`.${locale}`);
  let createdBtn = document.createElement('button');
  createdBtn.innerText = name;
  createdBtn.id = id;
  localeBtn.appendChild(createdBtn);
}

createdBtn('Feriado', 'buttons-container', 'btn-holiday');

//exercicio 3

let status = true;
function color(target, color) {
  return (target.style.backgroundColor = color);
}

function toggleColor() {
  status = !status;
  let btnBackgroundColor1 = document.querySelectorAll('.holiday');
  btnBackgroundColor1.forEach((item) => {
    if (status) {
      color(item, 'rgb(238,238,238)');
    } else {
      color(item, 'rgb(238,238,138)');
    }
  });
}

function clickBtnHoliday() {
  let btn = document.getElementById('btn-holiday');
  btn.addEventListener('click', toggleColor);
}

clickBtnHoliday();

//exercicio 4

createdBtn('Sexta-feira', 'buttons-container', 'btn-friday');
