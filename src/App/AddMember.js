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
        console.log(e);
        this.setState({
            type : "text",
            value:"",
        })
    }
    render() {
        return (<input type={this.state.type} className="add-student" onClick={this.handleAddStudent} value={this.state.value} />)
    }
}

export default AddMember;