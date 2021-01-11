import React from "react";

import pokemons from "./data";
import ListInfo from "./ListInfo";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h1>Pokedex</h1>
        <ul>
          {pokemons.map((pokemon, index) => (
            <ListInfo key={index} data={pokemon} />
          ))}
        </ul>
        -
      </div>
    );
  }
}

export default App;

// import "./App.css";
// import Image from "./Image";

// function App() {
//   const data = {
//     source:
//       "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
//     alt: "Cute cat staring",
//   };
//   return <Image source={data.source} alternativeText={data.alt} />;
// }

// export default App;
