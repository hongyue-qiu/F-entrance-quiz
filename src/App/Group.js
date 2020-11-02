import React, { Component } from 'react';
import './App.scss';

class Group extends Component {
    // TODO GTB-知识点: - state应该放到constructor里面
    state = {
        students:[],
        groups:[],
    }
    // TODO GTB-工程实践: - Eslint error应该fix

    render() {
        return (
            // TODO GTB-工程实践: - session这个class的名字没有反映业务逻辑
            <div className="session">
                {/* // TODO GTB-知识点: - button元素不应该放到h2里面 */}
                <h2>分组列表 <button className="group-stu">分组学员</button></h2>
                <div className="students students-group">
                    <div className="students-group-title">
                        1 组
                    </div>
                    <div className="students-group-content">
                        <p>1.成吉思汗</p>
                        <p>2.鲁班七号</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Group;
