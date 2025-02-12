import React, { Component } from 'react';

class Message extends Component{

    constructor(){
        super()   //We extends component class so we have to call the base class constructor
        this.state = {
            message: 'Welcome Visitor' 
        }
    }

    changeMessage() {
        this.setState({       //State is privately maintain within the component
            message: 'Thank you for subscribing'
        })
    }
    render(){
        return (    //() should be used JSX expands over multiple lines.
            <div>   {/*Use div tag becuse react wants only one one element returns*/}
            <h1>{this.state.message}</h1> {/*Now we have ability to change the message*/}
            <button onClick ={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;