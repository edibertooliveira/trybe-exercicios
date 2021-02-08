import React from 'react';
import GameBoard from './GameBoard';
import './TicTacToe.css';

const returnWin = [
  [
    ['diagonal', [0, 4, 8]],
    ['diagonal', [2, 4, 6]],
  ],
  [
    ['vestical', [0, 3, 6]],
    ['vestical', [1, 4, 7]],
    ['vestical', [2, 5, 8]],
  ],
  [
    ['horizontal', [0, 1, 2]],
    ['horizontal', [3, 4, 5]],
    ['horizontal', [6, 7, 8]],
  ],
];

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      playerX: [],
      playerO: [],
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      endGame: false,
    };

    this.handlePlayersMove = this.handlePlayersMove.bind(this);
    this.winningConditions = this.winningConditions.bind(this);
  }

  winningConditions(playerCurrent) {
    const [diagonal, vestical, horizontal] = returnWin;

    const checked =
      diagonal.find(value1 => value1[1].every(value2 => playerCurrent.includes(value2))) ||
      vestical.find(value1 => value1[1].every(value2 => playerCurrent.includes(value2))) ||
      horizontal.find(value1 => value1[1].every(value2 => playerCurrent.includes(value2)));
    this.setState(state => ({ ...state, endGame: checked }));
  }

  handlePlayersMove(position) {
    let { activePlayer, gameBoard } = this.state;

    const player = activePlayer === 1 ? 'X' : 'O';
    const newGameBoard = [];
    const activeRound = player === 'X' ? (activePlayer = 2) : (activePlayer = 1);

    gameBoard.forEach((field, index) => {
      if (index === position) field = player;
      newGameBoard.push(field);
    });

    this.setState(state => ({
      [`player${player}`]: [...state[`player${player}`], position],
      activePlayer: activeRound,
      gameBoard: newGameBoard,
    }));
    this.winningConditions([...this.state[`player${player}`], position]);
  }

  render() {
    const { gameBoard, endGame, activePlayer } = this.state;

    if (endGame) {
      return (
        <section className="ticTacToe">
          <h1>{`Fim de Jogo`}</h1>
          <p>{` Vitoria ${endGame[0]} do Player ${activePlayer}`}</p>
        </section>
      );
    }
    return (
      <section className="ticTacToe">
        <GameBoard
          gameState={gameBoard}
          onClick={this.handlePlayersMove}
          endGame={this.winningConditions}
        />
      </section>
    );
  }
}

export default TicTacToe;
