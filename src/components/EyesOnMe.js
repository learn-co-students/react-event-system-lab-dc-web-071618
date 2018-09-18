// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{

  focuses = () => {
    console.log('Good!')
  }

  blures = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.focuses} onBlur={this.blures}></button>
    )
  }

}
