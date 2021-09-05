import axios from 'axios';

class ReportService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3030/',
      withCredentials: true
    });
    this.service = service;
  }

    createReport = (title, description, status, priority, reportCreator, owner) => {
      return this.service.post('/create-report', {title, description, status, priority, reportCreator, owner})
      .then(response => response.data)
    }
    getAllReport = ()=>{
      return this.service.get('/allreports')
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
    getMyReport = (data)=>{
      return this.service.get('/myreports', {params: {data: data}})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
    getMyCreatedReport = (data)=>{
      return this.service.get('/mycreatedreports', {params: {data: data}})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
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
    deleteReport = (id)=>{
      console.log("inside reportservice", id)
      return this.service.delete('/deleteReport', {params: {id: id}})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
    updateReportPriority = (id, priority)=>{
      return this.service.post('/updateReportPriority', {id, priority})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
    updateReportOwner = (id, owner)=>{
      return this.service.post('/updateReportOwner', {id, owner})
      .then(response => response.data )
      .catch( error => console.log(error) )
    }
}
 
export default ReportService;