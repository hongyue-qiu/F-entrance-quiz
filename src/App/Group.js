import React, { Component } from 'react';
import './App.scss';

// TODO GTB-工程实践: - 组件命名不合理，建议改为Groups
class Group extends Component {
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
    // TODO GTB-工程实践: - API请求建议抽取到单独的utils文件里面
    fetch('http://localhost:3000/groups', {
      method: 'GET',
      // TODO GTB-知识点: - 跨域的处理应该放到后端
      mode: 'cors',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
        //  TODO feedback: 页面的模块划分非常明显，需要第一层的div换为section标签更合适
        // TODO GTB-工程实践: - css class的命名（session）没有体现业务逻辑
      <div className="session">
        <nav className="nav">
          <h2>分组列表</h2>
          {/* // TODO GTB-工程实践: -  不要进行无意义的缩写（group-stu） */}
          <input type="button" className="group-stu" onClick={this.handleGroup} value="分组学员" />
        </nav>
        {this.state.show &&
          this.state.groupList &&
        // TODO feedback: 列表元素没有使用ul li
          this.state.groupList.map((group) => {
            return (
              <div className="students students-group" key={group.id}>
                <div className="students-group-title">
                  <h3>{group.name}</h3>
                  {group.trainers &&
                  // TODO GTB-知识点: - 组件划分不合理，出现了map里面套map,说明这里应该再抽取一层组件
                  // TODO feedback: 列表元素没有使用ul li
                  group.trainers.map((trainer) => {
                      return (
                        <p
                          key={`student${trainer.id}`}
                          className="student-item member-group"
                        >{`${trainer.id}. ${trainer.name}`}</p>
                      );
                    })}
                </div>
                <div className="students-group-content">
                  {group.trainees &&
                  // TODO feedback: 列表元素没有使用ul li
                    group.trainees.map((trainees) => {
                      return (
                        <p
                          key={`student${trainees.id}`}
                          className="student-item member-group"
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
