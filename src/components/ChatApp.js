import React, {Component} from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import io from "socket.io-client";

class ChatApp extends Component{
    socket={};
    constructor(props){
        super(props);
        this.state = {
            messages : []
        };
        this.socket = io({api:"http://localhost:4009",},{query:`username=${props.username}`,}).connect();
        this.socket.on("server:message",message=>{this.addMessage(message)});
    }

    onSend = (text) => {
        const messageObject = {
            username:this.props.sender,
            message : text,
            fromMe : true
        };

        this.socket.emit("client:message",messageObject);
        this.addMessage(messageObject);
        
    }

    addMessage = (messageObj) => {
        const {messages} = this.state;
        this.setState({messages : messages.concat(messageObj)});
    }

    render(){
        return(
            <div>
                <h2>hello {this.props.SendName}</h2>
                <Messages/>
                <ChatInput onSend={this.onSend}/>
            </div>
        );
    }
};

export default ChatApp;