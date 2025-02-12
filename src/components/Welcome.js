import React, {Component} from 'react';

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} from {this.props.faculty} faculty</h1>
//     }
// }

//Destructuring in the class component
class Welcome extends Component{
    render(){
        const {name, faculty} = this.props
        return <h1>Welcome {name} from {faculty} faculty</h1>
    }
}

export default Welcome;