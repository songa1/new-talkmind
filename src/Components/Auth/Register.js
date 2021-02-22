import React, { useState }from 'react';
import { connect } from 'react-redux'
import { RegisterAction } from '../../Redux/Actions/RegisterAction';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password
        }
        
        this.props.RegisterAction(user);
    }
    render() {
        return (
            <div className="regPopup">
                <div className="popupContent">
                    <div className="popupHeader">
                        <h4>Create a new account</h4>
                    </div>
                    <div className="popupBody">
                        <label>Username</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.handleChange} name="username"></input>
                        <label>Email</label>
                        <input type="email" className="form-control"  value={this.state.email} onChange={this.handleChange} name="email"></input>
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name='password'></input>
                    </div>
                    <div className="popupFooter">
                        <input type="submit" value="Register" onClick={this.handleClick
                        }></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { RegisterAction })(Register);