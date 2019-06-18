import React, { Component } from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import io from "socket.io-client";
require("../styles/App.css");
require("../styles/ChatApp.css");

class ChatApp extends Component {
    socket = {};
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            typeStatus: ""
        };
        this.socket = io("http://localhost:4009", { query: `username=${props.username}` });
        this.socket.on("server:message", message => {

            this.addMessage(message)

        });

        this.socket.on("server:typing", name => {

            this.PrintTypingName(name);
        });

    }

    onSend = (text) => {
        const messageObject = {
            username: this.props.SendName,
            message: text,
            fromMe: true
        };

        this.socket.emit("client:message", messageObject);
        this.addMessage(messageObject);

    }

    onType = (name) => {

        this.socket.emit("client:typing", name);
    }

    PrintTypingName = (name) => {
        this.setState({ typeStatus: `${name} is typing......` });
        setTimeout(() => {
            this.setState({ typeStatus: "" });
        }, 1000);

    }



    addMessage = (messageObj) => {
        const { messages } = this.state;
        this.setState({ messages: messages.concat(messageObj) });


    }

    render() {

        return (
            <div>
                <p>{this.state.typeStatus}</p>
                <Messages messageSend={this.state.messages} />
                <ChatInput onSend={this.onSend} SendName={this.props.SendName} onType={this.onType} />
            </div>
        );
    }
};

export default ChatApp;