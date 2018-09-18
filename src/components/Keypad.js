// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
  // return(
  //   <div></div>
  // )

  // render nd input of  type="password"  with the right type
  // add an event handler that listens for the keyUp event
  // add an event handler that listens for the keyUp event


keyHandler = () => {
    console.log ('Entering Pasword...')
  }

  render(){
    return(
      <input type="password" onKeyUp={this.keyHandler}></input>
    )
  }
}
