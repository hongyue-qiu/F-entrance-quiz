import React, { Component } from 'react';
import './App.scss';
import AddMember from './AddMember';

class Trainers extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      trainers: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/trainers', {
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
        console.log(data[0].name);
        this.setState({
          trainers: data,
        });
      });
  }

  render() {
    return (
      <div className="session">
        <div className="students">
          <h2>讲师列表</h2>
          {this.state.trainers.map((trainers) => {
            return <p key={`student${trainers.id}`}>{`${trainers.id}. ${trainers.name}`}</p>;
          })}
          <AddMember />
        </div>
      </div>
    );
  }
}

export default Trainers;
