import React, { Component } from 'react';
import './App.scss';

class Group extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    students: [],
    // eslint-disable-next-line react/no-unused-state
    groups: [],
    show: false,
  };

  // eslint-disable-next-line no-unused-vars
  handleAddStudent = (e) => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <div className="session">
        <nav className="nav">
          <h2>分组列表</h2>
          <input
            type="button"
            className="group-stu"
            onClick={this.handleAddStudent}
            value="分组学员"
          />
        </nav>
        {this.state.show && (
          <div className="students students-group">
            <div className="students-group-title">1 组</div>
            <div className="students-group-content">
              <p>1.成吉思汗</p>
              <p>2.鲁班七号</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Group;
