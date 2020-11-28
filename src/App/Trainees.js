import React, { Component } from 'react';
import './App.scss';

class Trainees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      type: 'button',
      value: '+ 添加学员',
    };

    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.getTrainee();
  }

  getTrainee() {
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

  handleAddStudent = () => {
    this.setState({
      type: 'text',
      value: '',
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.state.type === 'text') {
      event.preventDefault();
      fetch('http://localhost:3000/trainees', {
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
          this.getTrainee();
        });

      this.setState({
        type: 'button',
        value: '+ 添加学员',
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
          <h2>学员列表</h2>
          <div className="member-list">
            {this.state.trainees.map((trainees) => {
              return (
                <div className="member" key={`student${trainees.id}`}>
                  <p key={`student${trainees.id}`}>{`${trainees.id}. ${trainees.name}`}</p>
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

export default Trainees;
