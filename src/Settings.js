import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props); // Absolutely needed since we're using props
    this.state = { currentName: this.props.username, botSays: this.props.botMessage, bot2Says: this.props.bot2Message }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.settingsSubmit(this.state.currentName);
    this.props.setBotMessage(this.state.botSays);
    this.props.setBot2Message(this.state.bot2Says);
    this.props.count();
  }
  changeHandler = (event) => {
    // Fires when the input box is updated
    this.setState({ currentName: event.target.value })
    
  }
  changeBotSaysHandler = (event) => {
    this.setState({ botSays: event.target.value })
  }

  changeBot2SaysHandler = (event) => {
    this.setState({bot2Says : event.target.value})
  }
  render() {
    return (<form onSubmit={this.handleSubmit} className="basic-grey">
      <label> Change your name to
        <input value={this.state.currentName}
          onChange={this.changeHandler}
          type="text" />
      </label>
      <label> What should the bot say?
        <input value={this.state.botSays}
          onChange={this.changeBotSaysHandler}
          type="text" />
      </label>
      <input type="submit" />
      <label> What should bot2 say?
        <input value={this.state.bot2Says}
          onChange={this.changeBot2SaysHandler}
          type="text" />
      </label>
      <input type="submit" />
    </form>)

  }
}

export default Settings;
