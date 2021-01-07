const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// eslint-disable-line no-console

const lesson2Added = (obj, key, value) => {
  const newObj = (obj[key] = value);
  return newObj;
};

// exercicio 1
lesson2Added(lesson2, 'turno', 'manha');
console.log(lesson2); // eslint-disable-line no-console

// exercicio 2
const lessonList = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(key); // eslint-disable-line
  });
};
console.log(lessonList(lesson3)); // eslint-disable-line no-console

// exercicio 3

const lesson1Size = (obj) => {
  return Object.keys(obj).length;
};

console.log(lesson1Size(lesson1)); // eslint-disable-line

// exercicio 4

const lessonValue = (obj) => {
  return Object.values(obj).forEach((value) => {
    console.log(value); // eslint-disable-line
  });
};

console.log(lessonValue(lesson1)); // eslint-disable-line no-console

// exercicio 5

const newObj = { lesson1, lesson2, lesson3 };

console.log(newObj); // eslint-disable-line

// exercicio 6
const lessonSum = () => {
  return (
    newObj.lesson1.numeroEstudantes +
    newObj.lesson1.numeroEstudantes +
    newObj.lesson1.numeroEstudantes
  );
};

console.log(lessonSum());

// exercicio 7

const position = (obj, number) => Object.values(obj)[number];
console.log(position(lesson1, 0));

// exercicio 8

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  console.log(arr);
  let isEqual = false;
  for (const index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));
