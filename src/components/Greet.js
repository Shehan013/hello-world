import React from 'react';

// function Greet(){
//     return <h1>Hello Shehan!</h1>
// }
// const Greet = () => <h1>Hello Sri Lanka!</h1>

const Greet = (props) =>{
    console.log(props)
    return(
        <div>
        <h1>Hello {props.name} He is from {props.faculty}</h1>
        {props.children}
        </div>
    )
     
     
}

export default Greet;