import {Component} from 'react';
import React from 'react';

export default class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {text} = message;
    return (<div>
      <li>{text}</li>
      </div>
    );
  }
}