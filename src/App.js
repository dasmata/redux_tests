import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render(){
    return (<div>
        App component
        {this.props.children}
    </div>);
  }
}

export default App;
