import React, { Component } from 'react';
import './App.scss';

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
    this.getTrainers();
  }

  getTrainers() {
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
          this.getTrainers();
        });

      this.setState({
        type: 'button',
        value: '+ 添加讲师',
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
          <div className="member-list">
            {this.state.trainers &&
              this.state.trainers.map((trainers) => {
                return (
                  <div className="member" key={`student${trainers.id}`}>
                    <p>{`${trainers.id}. ${trainers.name}`}</p>
                    <input className="member-delete" type="button" value="×" />️
                  </div>
                );
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
      </div>
    );
  }
}

export default Trainers;
