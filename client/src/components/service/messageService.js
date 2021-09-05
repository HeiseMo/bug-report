import axios from 'axios';

class MessageService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3030/',
      withCredentials: true
    });
    this.service = service;
  }

    createMessage = (message, messageCreator, report) => {
      return this.service.post('/create-message', {message, messageCreator, report})
      .then(response => response.data)
    }
    getMessages = (reportMsg)=> {
      return this.service.get('/collect-messages', {params: {reportMsgId: reportMsg}})
      .then(response => response.data)
      .catch( error => console.log(error) )
    }
    deleteMsg = (id)=> {
      return this.service.delete('/delete-messages', {params: {id: id}})
      .then(response => response.data)
      .catch( error => console.log(error) )
    }/*
    getOneReport = ()=>{
      return this.service.get('/report')
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
    updateReport = (id, status)=>{
      return this.service.post('/updateReport', {id, status})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
    updateReportPriority = (id, priority)=>{
      return this.service.post('/updateReportPriority', {id, priority})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }*/
}
 
export default MessageService;