import React, {Component} from 'react';
import {  Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Reports from './Reports';
import MyReports from './MyReports';
import MyCreatedReports from './MyCreatedReports';
import Home from './Home';

export default class Dashboard extends Component {
    render(){
        return (
            <>
            <Header />
                <div class="container-fluid">
                  <div className="row">
                      <Sidebar userObj={this.props.userObj}/>
                    <Route exact path='/' render={(...props) => (
                      <Home userObj={this.props.userObj}/> 
                      )} />
                    <Route exact path='/reports' render={(...props) => (
                      <Reports userObj={this.props.userObj}/>
                  )} />
                    <Route exact path='/my-reports' render={(...props) => (
                      <MyReports userObj={this.props.userObj}/>
                  )} />
                    <Route exact path='/my-created-reports' render={(...props) => (
                      <MyCreatedReports userObj={this.props.userObj}/>
                  )} />
                </div>
                </div>
                </>
                )
            }
}
