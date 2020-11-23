const sendString = (str) => {
  let deteminado = 'Tryber x aqui!';
  deteminado = deteminado.replace('x', str);
  return deteminado;
};
console.log(sendString('Bebeto')); // eslint-disable-line no-console
