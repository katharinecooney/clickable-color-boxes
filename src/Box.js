import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'lilac', 'magenta', 'cornflowerblue', 'orchid']
  }

  constructor(props){
    super(props);
    this.state = {
      color: 'purple'
    }
  }

  handleClick = (e) => {
    let randomIndex = Math.floor(Math.random() * this.props.allColors.length);
    let randomColor = this.props.allColors[randomIndex];
    this.setState({
      color: randomColor
    })
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