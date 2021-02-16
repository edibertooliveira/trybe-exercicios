import React from 'react';
import { connect } from 'react-redux'
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button type="button" name='red' onClick={({target})=> changeSignal(target.innerHTML.toLowerCase())}>Red</button>
        <button type="button" name='yellow' onClick={({target})=> changeSignal(target.name)}>Yellow</button>
        <button type="button" name='green' onClick={({target})=> changeSignal(target.name)}>Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.signalReducer.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch(changeSignal(payload)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal)
