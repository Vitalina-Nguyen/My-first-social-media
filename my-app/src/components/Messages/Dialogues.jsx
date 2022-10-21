import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogues.module.css';

const Dialog = (props) => {
    let path = 'dialogs/' + props.id;
    return (
        <div className= {s.dialog}>
            <NavLink to = {path} >{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className= {s.massage}>{props.message}</div>
    );
}

function Dialogues (props) {
    return (
        <div className= {s.dialogs}>
            <div className= {s.dialogsItems}>
                <Dialog name = 'Victor' id = '1' />
                <Dialog name = 'July' id = '2' />
                <Dialog name = 'Anastasia' id = '3' />
            </div>
            <div className= {s.massages}>
                <Message message = 'Hello'/>
                <Message message = 'How are you?'/>
            </div>
        </div>
    );
}

export default Dialogues;