import React, { Component } from 'react';
import ChatLine from './ChatLine.js'



// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let PROFILE_SCREEN = "profile"

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { currentMsg: "" }
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = (event) => {
    let newMsgs = this.props.messages;
    newMsgs = newMsgs.concat(this.props.username + ": " + this.state.currentMsg);
    newMsgs = newMsgs.concat("barbara: "+this.props.botMessage);
    newMsgs = newMsgs.concat("Peter: " + this.props.bot2Message);
    // Fires when the submit button is clicked
    event.preventDefault();
    this.props.setM(newMsgs);
    this.props.count();

  }
  changeHandler(event) {
    // Fires when the input box is updated
    this.setState({ currentMsg: event.target.value })
  }

  deleteMessages = () =>{
     this.props.setM([]);
     this.props.count();
  }

  render() {
    
    // let listOfItems = this.props.messages.map((el,id) => {
    //   return (
    //     <li> <ChatLine deleteItem={this.props.deleteItem} message={str}/> </li>
    //   )
    // })
    
    let lify = (str,id) => (<li> <ChatLine index={id} deleteItem={this.props.deleteItem} message={str}/> </li>)
    return (<div>
      <ul>
        {this.props.messages.map(lify)}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <label> Chat message <input value={this.state.currentMsg} onChange={this.changeHandler} type="text" /> </label>
        <input type="submit" value="submit"></input>
      </form>
      <button onClick={this.props.gotoSettings}>Go to settings page</button>
      <button onClick={this.deleteMessages}>Delete all messages</button>
      </div>)

  }
}

export default Chat;
