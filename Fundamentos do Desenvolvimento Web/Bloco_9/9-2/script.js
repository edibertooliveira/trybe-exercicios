const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML += `<h3>${data.id}</h3>`;
    document.body.innerHTML += `<span>${data.joke}</span>`;
  });

window.onload = () => fetchJoke();
