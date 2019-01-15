import React, { Component } from 'react';

class FamousPerson extends Component {
    constructor() {
        super();

        this.state = {
            famousName: 'Denzel',
            famousRole: 'CIA Guy',
        };
    }

    handleChange = (event) => {
        console.log(event.target.value);

        this.setState({
            famousName: event.target.value,
            famousRole: event.target.value
        });
    }

    render(){
        return (
            <div>
                <input onChange = {this.handleChange} type="text"
                placeholder="Actor Name" />

                <input onChange = {this.handleChange} type="text"
                placeholder="Actor's Role" />
                <br />

                <p>{this.state.famousName} is famous for  {this.state.famousRole}</p>
            </div>
        );
    }
}

export default FamousPerson;