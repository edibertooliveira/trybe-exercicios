const fetch = require('node-fetch');

const getRepos = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.map(repo => repo.name);
    });
};

describe('O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado.', () => {
  test('que verifique que os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista.', () => {
    const url = 'https://api.github.com/users/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).not.toContain('sd-01-week4-5-project-todo-list');
      expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
