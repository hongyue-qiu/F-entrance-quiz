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

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleGroup = this.handleGroup.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  handleGroup = (e) => {
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
