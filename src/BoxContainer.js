import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
  static defaultProps = {
    numOfBoxes: 18,
    allColors: ['purple', 'violet', 'magenta', 'cornflowerblue', 'orchid']
  }
  render(){
    const boxes = Array.from({length: this.props.numOfBoxes}).map(() => (<Box colors={this.props.allColors}/>))
    return(
      <div className="BoxContainer">
        {boxes}
      </div>
    )
  }
}

export default BoxContainer;