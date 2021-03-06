import React from 'react';
import './App.css';
import Messages from './components/Messages';
import Input from './components/Input';
import {randomName, randomColor} from './components/NameColorData'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      member: {
        username: randomName(),
        color: randomColor(),
      }
    }
  }

  componentDidMount() {
    this.drone = new window.Scaledrone('5D9V0tsX5DxmjSvr', {data: this.state.member});    
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      else {
        console.log("Connected")
      }
      const user = {...this.state.member};
      user.id = this.drone.clientId;
      this.setState({member: user});
      console.log(user)
    });

    const room = this.drone.subscribe("observable-chat-room");
    room.on("data", (data, member) => {
      console.log("Member:", member)
      const messages = this.state.text;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  sendMessage = (message) => {
    this.drone.publish({
      room: "observable-chat-room",
      message
    });
    this.setState({message});
    }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Chat App</h1>
        </div>
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