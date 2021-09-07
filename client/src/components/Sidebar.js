// Sidebar.js
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

    render(){
        return (
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <Link to={"/"}>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"/>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              </Link>
              <Link to={"/reports"}>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <img src="https://img.icons8.com/windows/24/000000/bug.png"/>
                  All Open Bugs
                </a>
              </li>
              </Link>
              <Link to={"/my-reports"}>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <img src="https://img.icons8.com/windows/24/000000/assignment-return.png"/>
                  Assigned To Me
                </a>
              </li>
              </Link>
              <Link to={"/my-created-reports"}>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <img src="https://img.icons8.com/ios/24/000000/i-pronoun.png"/>                  
                  Created by Me
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </nav>
        )
    }
}