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

// exercicio 1

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

// exercicio 2

function ehId(target, id) {
  return !id ? '' : (target.id = id);
}
function ehClass(target, className) {
  return !className ? '' : (target.className = className);
}
function ehName(target, name) {
  return !name ? '' : (target.innerText = name);
}

function createdElementHTML(name, locale, type, id, className) {
  const localeBtn = document.querySelector(`.${locale}`);
  const createdElement = document.createElement(type);
  ehName(createdElement, name);
  ehId(createdElement, id);
  ehClass(createdElement, className);
  localeBtn.appendChild(createdElement);
}

createdElementHTML('Feriado', 'buttons-container', 'button', 'btn-holiday');

// exercicio 3

let holiday = true;

function color(target, color) {
  return (target.style.backgroundColor = color);
}

function toggleColor() {
  holiday = !holiday;
  const btnBackgroundColor1 = document.querySelectorAll('.holiday');
  btnBackgroundColor1.forEach((item) => {
    if (holiday) {
      color(item, 'rgb(238,238,238)');
    } else {
      color(item, 'rgb(238,238,138)');
    }
  });
}

function clickBtn(locale, callback) {
  const btn = document.getElementById(locale);
  btn.addEventListener('click', callback);
}

clickBtn('btn-holiday', toggleColor);

// exercicio 4

createdElementHTML('Sexta-feira', 'buttons-container', 'button', 'btn-friday');

// exercicio 5

let friday = false;
function text(target, text) {
  return (target.innerText = text);
}

function toggleText() {
  friday = !friday;
  const btnBackgroundColor1 = document.querySelectorAll('.friday');
  btnBackgroundColor1.forEach((item) => {
    if (friday) {
      text(item, 'Sextouu!');
    } else {
      const returnValue = item.nextElementSibling.innerText - 1;
      text(item, returnValue);
    }
  });
}

clickBtn('btn-friday', toggleText);

// exercicio 6

function zoom(target, size) {
  return (target.style.fontSize = `${size}px`);
}
function addZoom(events, value) {
  const localedLi = document.querySelector('#days');
  localedLi.addEventListener(events, (element) => {
    zoom(element.path[0], value);
  });
}

function zoomNumberWeek() {
  addZoom('mouseover', 25);
  addZoom('mouseout', 20);
}

zoomNumberWeek();

// exercicio 7

function taskList(task) {
  taskListColor('yellow');
  createdElementHTML(task, 'my-tasks', 'span');
}

taskList('café');

// exercicio 8

function taskListColor(color) {
  createdElementHTML(false, 'my-tasks', 'div', false, 'task');
  document.querySelector('.task').style.backgroundColor = color;
}

// exercicio 9

function selectedTask(element) {
  return element.classList.toggle('selected');
}

let colorCurrent;

function clickTask(locale, events, callback) {
  const localedTask = document.querySelectorAll(`.${locale}`);
  localedTask.forEach((element) => {
    element.addEventListener(events, (event) => {
      const elementEvent = event.path[0];
      colorCurrent = event.path[0].style.backgroundColor;
      callback(elementEvent);
    });
  });
}

clickTask('task', 'click', selectedTask);

// exercicio 10
let day = false;

function addEventColorDays() {
  const clickDay = document.querySelector('#days');
  clickDay.addEventListener('click', (event) => {
    const elementEvent = event.path[0];
    day = !day;
    if (day) {
      elementEvent.style.backgroundColor = colorCurrent;
    } else {
      elementEvent.style.backgroundColor = 'rgb(238,238,238)';
    }
  });
}

addEventColorDays();
