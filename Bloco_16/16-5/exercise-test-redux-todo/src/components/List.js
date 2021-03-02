import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map((element, index) => (
            <p key={index} data-testid='item-tudo'>{element}</p>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({listReducer}) => ({
  list: listReducer.list
});

export default connect(mapStateToProps)(List);