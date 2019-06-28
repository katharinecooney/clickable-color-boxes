import React, { Component } from 'react';
import {choice} from './helpers';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'violet', 'magenta', 'cornflowerblue', 'orchid']
  }

  constructor(props){
    super(props);
    this.state = {
      color: this.props.allColors[Math.floor(Math.random() * this.props.allColors.length)]
    }
  }

  handleClick = (e) => {
    let newColor;

    do {
      newColor = choice(this.props.allColors);
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