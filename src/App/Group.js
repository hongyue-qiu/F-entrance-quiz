import React, { Component } from 'react';
import './App.scss';

class Group extends Component {
    state = {
        students:[],
        groups:[],
        show:false,
    }
    handleAddStudent=(e)=>{
        this.setState({
            show:true,
        })
    }
    render() {
        return (
            <div className="session">
                <h2>分组列表 <button className="group-stu" onClick={this.handleAddStudent} >分组学员</button></h2>
                {
                    this.state.show &&
                    <div className="students students-group">
                        <div className="students-group-title">
                            1 组
                        </div>
                        <div className="students-group-content">
                            <p>1.成吉思汗</p>
                            <p>2.鲁班七号</p>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Group;
