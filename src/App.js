import React, {Component} from 'react';
import './App.css';
import Messages from './components/Messages';
import Input from './components/Input';
import { randomColor, randomName } from './components/NameColorData'; 


class App extends Component {
  state = {
    text: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chat</h1>
        </div>
      </div>
    );
  }
}

export default App;