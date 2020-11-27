import React, { Component } from 'react';
import './App.scss';
import Group from './Group';

class App extends Component {
    state = {
        students:[],
        groups:[],
        type:"button",
        value:"+ 添加学员",
    }
    // async componentDidMount() {
    //     const response = await fetch('http://localhost:8080/students');
    //     const data = await response.json();
    //     this.setState({
    //         students: data,
    //     })
    // }
    handleAddStudent=(e)=>{
        console.log(e);
        this.setState({
            type : "text",
            value:"",
        })
    }

    render() {
        return (
          <div data-testid="app" className="App">
            <Group />
              {
                  this.state.groups.map((student) => {
                      return <Group key = {`student${student.id}`}></Group>
                  })
              }
              <div className="session">
                <div className="students">
                    <h2>学员列表</h2>
                    <p>
                        1.成吉思汗
                    </p>
                    {
                        this.state.students.map((student) => {
                            return <p key={`student${student.id}`}>{`${student.id}. ${student.name}`}</p>
                        })
                    }
                    <input type={this.state.type} className="add-student" onClick={this.handleAddStudent} value={this.state.value} />
                </div>
              </div>
              <div className="session">
                  <div className="students">
                      <h2>教师列表</h2>
                      <p>
                          1.成吉思汗
                      </p>
                      {
                          this.state.students.map((student) => {
                              return <p key={`student${student.id}`}>{`${student.id}. ${student.name}`}</p>
                          })
                      }
                      <button className="add-student" onClick={this.handleAddStudent}>+ 添加学员</button>
                  </div>
              </div>
          </div>
        );
      }
}

export default App;
