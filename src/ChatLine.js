import React, { Component } from 'react';

class ChatLine extends Component {
  constructor(){
    super()

  }
  deleteItem = () => {
    this.props.deleteItem(this.props.index)
  }

  render(){
    return(
      <div>
        {this.props.message}
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    )
  }
}

export default ChatLine;
