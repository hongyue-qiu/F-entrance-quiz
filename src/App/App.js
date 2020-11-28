import React, { Component } from 'react';
import './App.scss';
import Group from './Group';
import Trainees from './Trainees';
import Trainers from './Trainers';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
        <Trainers />
        <Trainees />
      </div>
    );
  }
}

export default App;
