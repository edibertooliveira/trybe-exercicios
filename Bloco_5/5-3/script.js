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

function createdElementHTML(name, locale, type, id) {
  let localeBtn = document.querySelector(`.${locale}`);
  let createdElement = document.createElement(type);
  createdElement.innerText = name;
  createdElement.id = id;
  localeBtn.appendChild(createdElement);
}

createdElementHTML('Feriado', 'buttons-container', 'button', 'btn-holiday');

//exercicio 3

let holiday = true;

function color(target, color) {
  return (target.style.backgroundColor = color);
}

function toggleColor() {
  holiday = !holiday;
  let btnBackgroundColor1 = document.querySelectorAll('.holiday');
  btnBackgroundColor1.forEach((item) => {
    if (holiday) {
      color(item, 'rgb(238,238,238)');
    } else {
      color(item, 'rgb(238,238,138)');
    }
  });
}

function clickBtn(locale, callback) {
  let btn = document.getElementById(locale);
  btn.addEventListener('click', callback);
}

clickBtn('btn-holiday', toggleColor);

//exercicio 4

createdElementHTML('Sexta-feira', 'buttons-container', 'button', 'btn-friday');

//exercicio 5

let friday = false;
function text(target, text) {
  return (target.innerText = text);
}

function toggleText() {
  friday = !friday;
  let btnBackgroundColor1 = document.querySelectorAll('.friday');
  btnBackgroundColor1.forEach((item) => {
    if (friday) {
      text(item, 'Sextouu!');
    } else {
      let returnValue = item.nextElementSibling.innerText - 1;
      text(item, returnValue);
    }
  });
}

clickBtn('btn-friday', toggleText);

//exercicio 6
function zoom(target, size) {
  return (target.style.fontSize = `${size}px`);
}
function addZoom(events, value) {
  let localedLi = document.querySelector('#days');
  localedLi.addEventListener(events, (element) => {
    zoom(element.path[0], value);
  });
}

function zoomNumberWeek() {
  addZoom('mouseover', 25);
  addZoom('mouseout', 20);
}

zoomNumberWeek();

//exercicio 7

function taskList(task) {
  createdElementHTML(task, 'my-tasks', 'span', false);
}

taskList('café');
