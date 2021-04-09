import React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// 🐨 receba `animal` e `onAnimalChange` como  props nesse componente
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 apague essa parte, já que agora ela será gerenciada no App.js
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => onAnimalChange(event.target.value)}
      />
    </div>
  )
}

// 🐨 descomente esse trecho
function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

// 💣 substitua esse componente pelo que foi descomentado acima
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

function App() {
  // 🐨 inclua um useState para o 'animal'
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 passe o animal e onAnimalChange como props aqui (semelhante ao que foi feito anteriormente no componente Name acima) */}
      <FavoriteAnimal animal={animal} onAnimalChange={setAnimal}/>
      {/* 🐨 passe a prop animal aqui */}
      <Display animal={animal} name={name} />
    </form>
  )
}

export default App