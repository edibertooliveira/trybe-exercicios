import React from 'react';
import GameCell from './GameCell';
import PropTypes from 'prop-types';
import './GameBoard.css';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      usedFields:[]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const { usedFields } = this.state;
    const { onClick } = this.props;
    if (usedFields.includes(index)) {
      return false
    }
    this.setState((state)=>({
      usedFields:[...state.usedFields, index]
    }))
    onClick(index)
  }
  
  render() {
    const { gameState } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell id={i} positionPlayer={playerId} listenPlay={this.handleClick} />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default GameBoard;
