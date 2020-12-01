import React, { Component } from 'react';
import './App.scss';
import Group from './Group';
import Trainees from './Trainees';
import Trainers from './Trainers';

class App extends Component {
    // TODO GTB-知识点: - groups， trainers， trainees这三个Array数据都应该被提升到App.js组件，因为三者数据之间有联动
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
