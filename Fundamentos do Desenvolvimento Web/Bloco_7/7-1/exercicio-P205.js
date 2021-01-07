const stringX = (str) => {
  let deteminado = 'Tryber x aqui!';
  deteminado = deteminado.replace('x', str);
  return deteminado;
};

const returnStringX = stringX('Bebeto');
const arrBuild = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT'];

const stringConcat = (str, arr) => {
  Object.values(arr).forEach((key) => {
    const newPhrase = `${key} ${str}`;
    console.log(newPhrase); // eslint-disable-line no-console
  });
};
stringConcat(returnStringX, arrBuild);
