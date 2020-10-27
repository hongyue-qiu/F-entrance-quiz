import React, { Component } from 'react';
import './App.scss';
import Group from './Group';

class App extends Component {
    state = {
        students:[],
        groups:[],
    }
  render() {
    return (
      <div data-testid="app" className="App">
        <Group />
          {
              this.state.groups.map((student, index) => {
                  return <Group item = {student} key = {`student${index}`}></Group>
              })
          }
          <div className="session">
            <div className="students">
                <h2>学员列表</h2>
                <p>
                    1.成吉思汗
                </p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
