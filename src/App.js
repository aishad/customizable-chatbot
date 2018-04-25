import React, { Component } from 'react';
import Login from './Login.js'
import Chat from './Chat.js'
import Settings from './Settings.js'
import ChatLine from './ChatLine.js'
import './App.css';

// There are three different screens. The first screen shown to the user is the login.
let LOGIN_SCREEN = "login"
let CHAT_SCREEN = "chat"
let SETTINGS_SCREEN = "settings"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: LOGIN_SCREEN, // The first screen the user sees is the login screen
      username: "noname",
      botMessage: "interesting",
      bot2Message: "Is that so...",
      messages: [],
      currentMsg:"",
      counter: 0
    }
  }
  loginFinished = (name) => {
    this.setState({ username: name, screen: CHAT_SCREEN });
  }
  settingsFinished = (name) => {
    
   let newMsgs = this.state.messages.map((elem)=>{
      let splitElem = elem.split(":");
      if (this.state.username === splitElem[0]){
        splitElem[0]=name;}
        return splitElem.join(":");
    }) 
      this.setState({messages: newMsgs ,username:name, screen: CHAT_SCREEN });
    }

  gotoSettings = () => {
    this.setState({ screen: SETTINGS_SCREEN })
    this.setCounter();

  }
  setBotMessage = (msg) => {
    this.setState({ botMessage: msg })
  }

  setBot2Message = (msg) =>{
    this.setState({bot2Message:msg})
  }

   setMessages = (msgs)=>{
    this.setState({messages:msgs});

  }

  deleteItem = (index) => {
    var tempItems = this.state.messages
    tempItems = tempItems.filter((el,id)=>{
      return (index !== id)
    })
    this.setState({messages : tempItems})
  }


  setCounter=()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render() {

    if (this.state.screen === LOGIN_SCREEN)
      return (
      <div><Login
        loginSubmit={this.loginFinished} 
        count={this.setCounter}
      />
      Counter total: {this.state.counter}</div>);
    if (this.state.screen === CHAT_SCREEN)
      return (<div>
      <Chat
        deleteItem = {this.deleteItem}
        botMessage={this.state.botMessage}
        bot2Message={this.state.bot2Message}
        gotoSettings={this.gotoSettings}
        username={this.state.username} 
        messages={this.state.messages}
        setM={this.setMessages}
        count={this.setCounter}
        deleteLine={this.chatLineDeleter}

  />
  Counter total:{this.state.counter}</div>);
    if (this.state.screen === SETTINGS_SCREEN)
      return (<div>
      <Settings
        botMessage={this.state.botMessage}
        bot2Message={this.state.bot2Message}
        username={this.state.username}
        settingsSubmit={this.settingsFinished}
        setBotMessage={this.setBotMessage} 
        setBot2Message={this.setBot2Message}
        count={this.setCounter}
        messages={this.state.messages}
        />Counter total: {this.state.counter}</div>);
  }
}

export default App;
