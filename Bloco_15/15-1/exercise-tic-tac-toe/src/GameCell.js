import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import XImage from './x.png';
import OImage from './o.png';
// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, positionPlayer, listenPlay } = this.props;

    return (
      <div data-testid={`cell_${id}`} className="game-cell" onClick={()=>listenPlay(id)}>
        {(positionPlayer && <img src={positionPlayer === 'X' ? XImage : OImage} alt={positionPlayer} />) || null}
      </div>
    );
  }
}
GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  positionPlayer: PropTypes.number.isRequired,
  listenPlay: PropTypes.func.isRequired,
}

export default GameCell;
