import React from 'react';
import { connect } from 'react-redux';
import { LoginAction } from '../../Redux/Actions/LoginActions';

class Login extends React.Component {

  // UNSAFE_componentWillMount() {
  //   this.props.LoginAction();
  // }

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    const userCreds = { 
      email: this.state.email, 
      password: this.state.password
    };
    this.props.LoginAction(userCreds) 
  }

render() {

  return (
    
      <div className="popupContent">
          <div className="popupHeader">
              <h4>Login to TalkMind</h4>
          </div>
          <div className="popupBody">
              <label>Email</label>
              <input type="email" className="form-control" value={this.state.email} onChange={this.onChange} id='email'></input>
              <label>Password</label>
              <input type="password" className="form-control" value={this.state.password} onChange={this.onChange} id='password'></input>
          </div>
          <div className="popupFooter">
              <input type="submit" value="Login" onClick={this.handleClick}></input>
          </div>
      </div>

  )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     login: state.login
//   }
// }

export default connect(null, { LoginAction })(Login);