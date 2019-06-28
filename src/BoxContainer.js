import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
  handleClick = () => {
    console.log('yay!')
  }
  
  render(){
    
    return(
      <div className="BoxContainer">
        <Box /> 
      </div>
    )
  }
}

export default BoxContainer;