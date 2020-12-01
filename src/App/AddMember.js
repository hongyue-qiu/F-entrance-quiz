import React, { Component } from 'react';
import './App.scss';

class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'button',
      value: '+ 添加成员',
    };

    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleAddStudent = () => {
    this.setState({
      type: 'text',
      value: '',
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
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
      <input
        type={this.state.type}
        className="add-student"
        onClick={this.handleAddStudent}
        onKeyDown={this.handleKeyDown}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}
// TODO GTB-工程实践: - 没有被使用到的代码，不应该被提交到remote
export default AddMember;
