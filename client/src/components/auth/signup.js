import React, { Component } from "react";
import AuthService from '../../components/auth/auth-service';

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
      }
     
      handleFormSubmit = (event) => {
          console.log("I clicked subbmit")
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
       
        this.service.signup(username, password)
        .then( response => {
            this.setState({
                username: "",
                password: "",
            });
            this.props.getUser(response)
        })
        .catch( error => console.log(error) )
      }
       
      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
    
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="First name" name="username" value={this.state.username} onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">Login?</a>
                </p>
            </form>
        );
    }
}
