import React from 'react';
import {useState} from 'react';

export default function Input({onSendMessage}) {

const [text, setText] = useState('');

// Input text value
const changeInput = (e) => {
    const newText = e.target.value;
    setText(newText.trimStart());
}

// Submiting text and preventing from refreshing
const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(text);
    setText('')
}

return (
        <form className="formInput" onSubmit={handleSubmit}>
            <input onChange={changeInput} value={text} type="text"
                placeholder="Write something..">
            </input>
            <button className='btnInput' disabled={!text}>
                <i className="fas fa-paper-plane"></i>
            </button>
        </form>
    );
}