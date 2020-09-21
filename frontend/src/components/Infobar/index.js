import React from 'react';

import closeIcon from '../../icon/close.png';

import './styles.css';

const Infobar = ({ room }) => ( 
    <div className = "infobar">
        <div className = "leftInnerContainer">
            <h4> {room}</h4>
        </div>

        <div className = "rightInnerContainer">
            <a href = "/"> 
                <img src = { closeIcon } alt= "Icone sair" />
            </a>
        </div>
    </div>
);

export default Infobar;