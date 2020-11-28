import React, { Component } from 'react';
import './App.scss';

class AddMember extends Component {
  // constructor(props) {
  //     console.log(props);
  //     super(props);
  //     this.state = {
  //         value: '',
  //     };
  // }
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // students:[],
    // groups:[],
    type: 'button',
    value: '+ 添加成员',
  };

  handleAddStudent = () => {
    this.setState({
      type: 'text',
      value: '',
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(event.key);
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

export default AddMember;
