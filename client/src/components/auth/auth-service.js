import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3030/api',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (username, password) => {
      console.log("im here")
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
   
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }
  getAllUsers = () => {
    return this.service.get('/get-users', {})
    .then(response => response.data)
  }
 
}
 
export default AuthService;