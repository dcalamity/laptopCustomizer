import React, {Component} from 'react';

import './features.css';
import Selection from './selection';


class Options extends Component {

  render(){
    return(
      <div className="main__form">
        <Selection features = {this.props.features}/>
      </div>
    )
  }
}

export default Options;