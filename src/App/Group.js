import React, { Component } from 'react';
import './App.scss';

class Group extends Component {
  // eslint-disable-next-line react/state-in-constructor
  // state = {
  //   // eslint-disable-next-line react/no-unused-state
  //   students: [],
  //   // eslint-disable-next-line react/no-unused-state
  //   groups: [],
  //   show: false,
  // };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      groupList: {},
    };

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleGroup = this.handleGroup.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/groups', {
      method: 'GET',
      mode: 'cors',
      // eslint-disable-next-line consistent-return
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
          groupList: data,
        });
      });
  }

  handleGroup = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <div className="session">
        <nav className="nav">
          <h2>分组列表</h2>
          <input type="button" className="group-stu" onClick={this.handleGroup} value="分组学员" />
        </nav>
        {this.state.show &&
          this.state.groupList.map((group) => {
            return (
              <div className="students students-group" key={group.id}>
                <div className="students-group-title">
                  <h3>{group.name}</h3>
                  {group.trainers.map((trainer) => {
                    return (
                      <p
                        key={`student${trainer.id}`}
                        className="student-item"
                      >{`${trainer.id}. ${trainer.name}`}</p>
                    );
                  })}
                </div>
                <div className="students-group-content">
                  {group.trainees.map((trainees) => {
                    return (
                      <p
                        key={`student${trainees.id}`}
                        className="student-item"
                      >{`${trainees.id}. ${trainees.name}`}</p>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Group;
