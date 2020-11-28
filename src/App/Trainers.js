import React, { Component } from 'react';
import './App.scss';

function getTrainers() {
  fetch('http://localhost:3000/trainers', {
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        trainers: data,
      });
    });
}

class Trainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      type: 'button',
      value: '+ 添加讲师',
    };

    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    getTrainers.call(this);
  }

  handleAddStudent = () => {
    this.setState({
      type: 'text',
      value: '',
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.state.type === 'text') {
      event.preventDefault();
      fetch('http://localhost:3000/trainers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${event.target.value}`,
      })
        .then((response) => {
          return response.json();
        })
        .then(() => {
          getTrainers.call(this);
        });

      this.setState({
        type: 'button',
        value: '+ 添加成员',
      });
    }
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="session">
        <div className="students">
          <h2>讲师列表</h2>
          {this.state.trainers &&
            this.state.trainers.map((trainers) => {
              return <p key={`student${trainers.id}`}>{`${trainers.id}. ${trainers.name}`}</p>;
            })}
          <input
            type={this.state.type}
            className="add-student"
            onClick={this.handleAddStudent}
            onKeyDown={this.handleKeyDown}
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default Trainers;
