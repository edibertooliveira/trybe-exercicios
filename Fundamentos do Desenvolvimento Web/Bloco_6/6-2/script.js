const localeSelectorCountry = document.getElementById('select-country');
const localeInputDateInicialaze = document.getElementById('data-inicial');
const localeButtonSubmit = document.getElementById('submit');
const localeButtonClear = document.getElementById('clear');
const listCountry = [
  { uf: 'AC', nome: 'Acre' },
  { uf: 'AL', nome: 'Alagoas' },
  { uf: 'AP', nome: 'Amapá' },
  { uf: 'AM', nome: 'Amazonas' },
  { uf: 'BA', nome: 'Bahia' },
  { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' },
  { uf: 'ES', nome: 'Espirito Santo' },
  { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' },
  { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' },
  { uf: 'MG', nome: 'Minas Gerais' },
  { uf: 'PA', nome: 'Pará' },
  { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PR', nome: 'Paraná' },
  { uf: 'PE', nome: 'Pernambuco' },
  { uf: 'PI', nome: 'Piauí' },
  { uf: 'RJ', nome: 'Rio de Janeiro' },
  { uf: 'RN', nome: 'Rio Grande do Norte' },
  { uf: 'RS', nome: 'Rio Grande do Sul' },
  { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' },
  { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SP', nome: 'São Paulo' },
  { uf: 'SE', nome: 'Sergipe' },
  { uf: 'TO', nome: 'Tocantins' },
];
function loadStatesSelect() {
  Object.keys(listCountry).forEach((index) => {
    const createOption = document.createElement('option');
    createOption.value = listCountry[index].uf;
    createOption.innerText = listCountry[index].nome;
    localeSelectorCountry.appendChild(createOption);
  });
}
function checketFormDate() {
  const checked = localeInputDateInicialaze;
  checked.value = !Number ? checked : Error('Error');
}
function clearForm() {
  document.querySelectorAll('input').forEach((element) => {
    const elementEvent = element;
    elementEvent.value = '';
  });
}
function submitForm(element) {
  element.preventDefault();
  clearForm();
}
localeInputDateInicialaze.addEventListener('change', checketFormDate);
localeSelectorCountry.addEventListener('mouseover', loadStatesSelect);
localeButtonClear.addEventListener('mouseover', clearForm);
localeButtonSubmit.addEventListener('click', (element) => {
  element.preventDefault();
  submitForm();
});
