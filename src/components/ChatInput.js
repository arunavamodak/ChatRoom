import React, { Component } from 'react';
require("../styles/App.css");
require("../styles/ChatApp.css");


class ChatInput extends Component {

    constructor(props) {

        super(props);
        this.state = { text: "" };

    }

    sendMessage = (event) => {
        event.preventDefault();
        this.props.onSend(this.state.text);
        this.setState({ text: "" });
    }

    handleChange = (event) => {

        this.setState({ text: event.target.value });

        this.props.onType(this.props.SendName);
    }

    render() {
        return (
           
                <form onSubmit={this.sendMessage}>
                    <input type="text" placeholder = "yaha pe type karo...." onChange={this.handleChange} value={this.state.text}></input>
                </form>
            
        );
    }
};

export default ChatInput;