import React, { Component } from 'react';
import './App.scss';

// TODO GTB-知识点: - 组件划分不合理，应该再抽出一层Trainer或者PersonnelItem组件
class Trainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      type: 'button',
      value: '+ 添加讲师',
    };

    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.getTrainers();
  }

  getTrainers() {
    // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
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

  handleDeleteStudent = (event) => {
    const { id } = event.target;
    // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
    fetch(`http://localhost:3000/trainers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        this.getTrainers();
      });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.state.type === 'text') {
      event.preventDefault();
      // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
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
        //  TODO feedback: 页面的模块划分非常明显，需要第一层的div换为section标签更合适
        <div className="session">
        <div className="students">
          <h2>讲师列表</h2>
          <div className="member-list">
            {this.state.trainers &&
            // TODO feedback: 列表元素没有使用ul li
              this.state.trainers.map((trainers) => {
                return (
                  <div className="member" key={`student${trainers.id}`}>
                    <p>{`${trainers.id}. ${trainers.name}`}</p>
                    <input
                      className="member-delete"
                      type="button"
                      value="×"
                      id={`${trainers.id}`}
                      onClick={this.handleDeleteStudent}
                    />
                    ️
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
