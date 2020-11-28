import React, { Component } from 'react';
import './App.scss';
import AddMember from './AddMember';

class Trainers extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      trainers: [],
      type: 'button',
      value: '+ 添加讲师',
    };

    // this.handleAddStudent = this.handleAddStudent.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
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

  handleAddStudent = (event) => {
    console.log(event);
    if (event.type === 'click') {
      console.log(event.type);
      this.setState({
        type: 'text',
        value: '',
      });
    }
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(event.target.value);
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
        .then((data) => {
          this.setState({
            trainers: data,
          });
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
          <AddMember />
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
