// Header.js
import React, {Component} from 'react';
import AuthService from './auth/auth-service';


export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null, search: "" };
    this.service = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }
    render(){
        return (
<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Track Me</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a onClick={this.logoutUser} class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
    </nav>
                )
            }
}