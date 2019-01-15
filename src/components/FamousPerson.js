import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor() {
        super();

        this.state = {
            famousName: 'Denzel',
            famousRole: 'CIA Guy',
        };
    }

    changeName = (event) => {
        console.log(event.target.value);

        this.setState({
            famousName: event.target.value
        });
    }

    changeRole = (event) => {
        console.log(event.target.value);

        this.setState({
            famousRole: event.target.value
        });
    }

    render(){
        return (
            <div>
                <input onChange = {this.changeName} type="text"
                placeholder="Actor Name" />

                <input onChange = {this.changeRole} type="text"
                placeholder="Actor's Role" />
                <br />

                <p>{this.state.famousName} is famous for  {this.state.famousRole}</p>
            </div>
        );
    }
}

export default FamousPerson;