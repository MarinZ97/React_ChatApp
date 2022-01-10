import React from 'react';
import { Component } from 'react';
import '../App.css';


export default class Messages extends Component {
    render() {
        const {messages} = this.props;
        return (
            <ul className='ulMessages'>
                 {messages.map((m, idx) => this.renderMessage(m, idx))}
            </ul>
        );
    }

renderMessage(message, idx) {
    const {member, text} = message;
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li key={idx} className={className}>
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
            <div className="text" style={{backgroundColor: member.clientData.color}}>{text}</div>
        </div>
      </li>
    );
  }
}