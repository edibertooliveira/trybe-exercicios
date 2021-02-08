import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    
    this.addSelected = this.addSelected.bind(this)
  }
  
  addSelected(id) {
    const { active } = this.props
    active( { 
      item :id, bool: false
    } );
  }

  render() {
    
    const { content, classItem, itemId } = this.props
    return (
      <div className={ classItem } onClick={() => this.addSelected(itemId) }>
        {content}
      </div>
    );
  }
}

export default Item;

