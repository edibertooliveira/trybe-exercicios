const setNumberRandom = () => {
  return Math.ceil(Math.random() * 100);
};
const upperCase = str => str.toUpperCase();
const firstLetter = str => str[0];
const concatWord = (str01, str02) => `${str01} ${str02}`;

function fetchDog() {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response =>
    response.json().then(json => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );
}

fetchDog();

module.exports = { setNumberRandom, upperCase, firstLetter, concatWord, fetchDog };
