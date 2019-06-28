import React, { Component } from 'react';
import {choice} from './helpers';
import './Box.css';

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    }
  }

  handleClick = (e) => {
    let newColor;

    do {
      newColor = choice(this.props.colors);
    } while (this.state.color === newColor);

    this.setState({color: newColor})
  }

  render(){
    return(
      <div 
        className="Box" 
        style={{backgroundColor: this.state.color}} 
        onClick={this.handleClick}>
      </div>
    )
  }
}

export default Box;