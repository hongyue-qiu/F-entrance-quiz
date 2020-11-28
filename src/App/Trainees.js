import React, { Component } from 'react';
import './App.scss';
import AddMember from './AddMember';

class Trainees extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      trainees: [],
    };

    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    return (
      <div className="session">
        <div className="students">
          <h2>学员列表</h2>
          <p>1.成吉思汗</p>
          {this.state.trainees.map((trainees) => {
            return <p key={`student${trainees.id}`}>{`${trainees.id}. ${trainees.name}`}</p>;
          })}
          <AddMember />
        </div>
      </div>
    );
  }
}

export default Trainees;
