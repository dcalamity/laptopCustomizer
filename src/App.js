import React, { Component } from 'react';
import Options from './features';
import './App.css';
import Header from './header'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Options features = {this.props.features} />
        </main>
      </div>
    );
  }
}

export default App;
