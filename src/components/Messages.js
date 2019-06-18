import React, { Component } from 'react';
import Message from './Message';
require("../styles/App.css");
require("../styles/ChatApp.css");



class Messages extends Component {
    render() {
        const DisplayMessages = this.props.messageSend.map((item) =>
            <Message oneMessage={item} />
        );

        return (
            <div id="listOfMessages">
                {DisplayMessages}
            </div>
        );
    }

    componentDidUpdate(){
        const list = document.getElementById("listOfMessages");
        list.scrollTop=list.scrollHeight;
    }
};

export default Messages;