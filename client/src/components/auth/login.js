import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../../components/auth/auth-service';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', password: '' };
        this.service = new AuthService();
      }
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
        .then( response => {
            this.setState({ username: "", password: "" });
            this.props.getUser(response)
            this.props.history.push("/");
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
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="string" className="form-control" placeholder="Enter email" name="username" value={this.state.username} onChange={ e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                Dont have an account? <Link to={"/sign-up"}><a href="#">Click Here</a></Link>
                </p>
            </form>
        );
    }
}