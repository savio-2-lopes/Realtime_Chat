import React from 'react';

import './styles.css';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className = "from"> 
        <input
            className="input"
            type="text"
            placeholder="Escreva a mensagem..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={e => sendMessage(e)}>Enviar</button>
  </form>
)

export default Input;