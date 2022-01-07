import React, {Component} from 'react';
import './App.css';
import Messages from './components/Messages';
import Input from './components/Input';
import {randomName, randomColor} from './components/NameColorData'; 


class App extends Component {
  state = {
    text: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone('5D9V0tsX5DxmjSvr', {data: this.state.member});
    console.log("Drone prikaz:", this.drone)
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      console.log("Test", this.drone)
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });

    const room = this.drone.subscribe("observable-room-chat");
    room.on("data", (data, member) => {
      const messages = this.state.text;
      messages.push({member, text: data});
      this.setState({messages});
    });
  
}

 sendMessage = (message) => {
  this.drone.publish({
    room: "observable-room-chat",
    message
  });
  this.setState({message});
}

  render() {

    return (
      <div className="App">
          <h1>Chat</h1>
        <Messages
          messages={this.state.text}
          currentMember={this.state.member}
          />
        <Input onSendMessage={this.sendMessage}/>
      </div>
    );
  }
}

export default App;