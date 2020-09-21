import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './styles.css';

import Infobar from '../Infobar';
import Input from '../Input';
import Messages from '../Messages';

let socket;

const Chat =  ({ location }) => {
    const [name, setName]   = useState('');
    const [room, setRoom]   = useState('');
    const [message, setMessage]   = useState('');
    const [messages, setMessages]   = useState([]);
    
    const ENDPOINT = 'https://react-1-chat.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        
        setName(name);
        setRoom(room);
        
        socket.emit('join', { name, room }, () => {
            
        });

        return () => {
            socket.emit('desconectando');

            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return ( 
        <div className = "outerContainer">
            <div className = "container"> 
                <Infobar  room = {room} />
                <Messages messages = {messages} name = {name} />
                <Input message = {message} setMessage = {setMessage} sendMessage = { sendMessage} />
            </div>
        </div>  
    )
}

export default Chat;