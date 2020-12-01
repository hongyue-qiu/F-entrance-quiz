import React, { Component } from 'react';
import './App.scss';

// TODO GTB-知识点: - 组件划分不合理，应该再抽出一层Trainee或者PersonnelItem组件
class Trainees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      type: 'button',
      value: '+ 添加学员',
    };

    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.getTrainee();
  }

  getTrainee() {
    // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
    fetch('http://localhost:3000/trainees', {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        // TODO GTB-知识点: - 疑惑：这个if()存在的意义是什么？因为你最终总是会return response.json();？
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

  handleDeleteStudent = (event) => {
    const { id } = event.target;
    // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
    fetch(`http://localhost:3000/trainees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        this.getTrainee();
      });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.state.type === 'text') {
      event.preventDefault();
      // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
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
        //  TODO feedback: 页面的模块划分非常明显，需要第一层的div换为section标签更合适
        <div className="session">
        <div className="students">
          <h2>学员列表</h2>
          <div className="member-list">
            {/* // TODO feedback: 列表元素没有使用ul li */}
            {this.state.trainees.map((trainees) => {
              return (
                <div className="member" key={`student${trainees.id}`}>
                  <p key={`student${trainees.id}`}>{`${trainees.id}. ${trainees.name}`}</p>
                  <input
                    className="member-delete"
                    type="button"
                    value="×"
                    id={`${trainees.id}`}
                    onClick={this.handleDeleteStudent}
                  />
                  ️
                </div>
              );
            })}
            {/* // TODO GTB-工程实践: - 不建议通过改变input的type这种方式来实现，这样会使代码变得复杂，从而不利于阅读和维护 */}
            {/* // TODO GTB-知识点: - 建议使用onKeyUp而不是onKeyDown */}
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
