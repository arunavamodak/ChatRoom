import React, {Component} from 'react';
 class ChatInput extends Component{
     constructor(props)
     {
        super(props);
        this.state = {text : ""};

     }

     sendMessage = () => {
         this.props.onSend(this.state.text);
     }

     handleChange = (event) =>{
         this.setState({text : event.target.value});
     }

     render(){
         return(
             <div>
                 <input type = "text" onChange = {this.handleChange} value = {this.state.text}></input>
                 <button onClick = {this.sendMessage}>Send</button>
             </div>
         );
     }
 };

 export default ChatInput;