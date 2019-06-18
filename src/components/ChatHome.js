import React, {Component} from 'react';
import ChatApp from './ChatApp';
require("../styles/App.css");
require("../styles/ChatApp.css");

class ChatHome extends Component {

    constructor(props){
        super(props);
        this.state = {
            status : false,
            textUsername : ""
        }
    }


inputChange = (event) =>{
    this.setState({textUsername : event.target.value});
    //console.log(this.state.textUsername);
}

changeStatus = () =>{
    this.setState({status : true});

}


    render(){
        if(this.state.status === true)
        return(
              <ChatApp SendName = {this.state.textUsername}/>
        );
        else if(this.state.status === false){
          return (
              <div>
                  <form onSubmit = {this.changeStatus}>
                      Username : <input onChange={this.inputChange} type="text"/>
                      <input type="submit"/>
                  </form>
              </div>
          );
        }
    }
};

export default ChatHome;