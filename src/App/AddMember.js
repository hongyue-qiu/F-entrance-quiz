import React, { Component } from 'react';
import './App.scss';

class AddMember extends Component{
    // constructor(props) {
    //     console.log(props);
    //     super(props);
    //     this.state = {
    //         value: '',
    //     };
    // }
    state = {
        students:[],
        groups:[],
        type:"button",
        value:"+ 添加成员",
    }
    handleAddStudent=(e)=>{
        this.setState({
            type : "text",
            value:"",
        })
    };
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(event.key);
            this.setState({
                type:"button",
                value:"+ 添加成员",
            })
        }
    };
    onChange = (event) => {
        const text = event.target.value;
        this.setState({
            value:event.target.value,
        });
    };
    render() {
        return (<input type={this.state.type} className="add-student" onClick={this.handleAddStudent} onKeyDown={this.handleKeyDown} onChange={this.onChange} value={this.state.value} />)
    }
}

export default AddMember;