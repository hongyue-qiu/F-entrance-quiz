import React, { Component } from 'react';
import './App.scss';
import AddMember from './AddMember';

class Trainees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/trainees', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          trainees: data,
        });
      });
  }

  render() {
    return (
      <div className="session">
        <div className="students">
          <h2>学员列表</h2>
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
