// Reports.js
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import AllReports from './AllReports';
import ReportView from './ReportView';
import ReportService from '../components/service/reportService';
import MessageService from '../components/service/messageService';
import AuthService from '../components/auth/auth-service';

export default class MyCreatedReports extends Component {
    constructor(props){
        super(props);
        this.state = {
            reports: [],
            report:[],
            messages:[],
            search: "",
            postSent: false,
            users: []
        }
        this.service = new ReportService();
        this.serviceMessage = new MessageService();
        this.serviceUser = new AuthService();
        this.reportSelected = this.reportSelected.bind(this)
        this.updateStatus = this.updateStatus.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
      }
      getUsers = (event) =>{
        this.serviceUser.getAllUsers()
        .then( response => {
            const data = response;
            return this.setState({ users: data})
        })
        .catch( error => console.log(error) )
      }
      updateSearch(value) {  
        this.setState({search: value});
      }
      deletReportFunction = (id) =>{
          console.log(id)
        this.service.deleteReport(id)
        .then( response => {
            const data = response;
            this.getReports()
            return this.setState({ report: []})
        })
        .catch( error => console.log(error) )
      }
      deletMessageFunction = (id, reportId) =>{
        console.log(id)
      this.serviceMessage.deleteMsg(id)
      .then( response => {
          const data = response;
          this.getReportMessages(reportId)
      })
      .catch( error => console.log(error) )
    }
      reportSelected = (data) => {
        this.setState({ report: data})
        this.getUsers();
        return this.getReportMessages(data);
      }

      getReports = (data) => {  
        this.service.getMyCreatedReport(data)
        .then( response => {
            const data = response;
            return this.setState({ reports: data})
        })
        .catch( error => console.log(error) )
      }

      updateStatus = (id, status, userInfo) => {
          console.log(id, status, "im checking id and status")
        this.service.updateReport(id, status)
        .then( response => {
            const data = response;
            this.getReports(this.props.userObj._id)
            return this.setState({ report: {...data, 'userinfo': userInfo}})
        })
        .catch( error => console.log(error) )
      }

      updatePriority = (id, priority, userInfo) => {
      this.service.updateReportPriority(id, priority)
      .then( response => {
          const data = response;
          this.getReports(this.props.userObj._id)
          return this.setState({ report: {...data, 'userinfo': userInfo}})
      })
      .catch( error => console.log(error) )
    }

    updateOwner = (id, owner, userInfo) => {
        this.service.updateReportOwner(id, owner)
        .then( response => {
            const data = response;
            this.getReports(this.props.userObj._id)
            return this.setState({ report: {...data, 'userinfo': userInfo}})
        })
        .catch( error => console.log(error) )
      }

    postMessage = (data) => {
        const postedMessage = data;
        const messageCreator = this.props.userObj._id;
        const report = this.state.report._id;
        this.serviceMessage.createMessage(postedMessage, messageCreator, report)
        .then( response => {
            const data = response;
            const id = this.state.report._id
            this.getReportMessages(id)
            return this.setState({ message: data, postSent: true})
        })
        .catch( error => console.log(error) )
      }
      getReportMessages = (myReport) => {
        if(typeof myReport == "string"){
            let theReportId = myReport
            this.serviceMessage.getMessages(theReportId)
            .then( response => {
                const data = response;
                return this.setState({ messages: data})
            })
            .catch( error => console.log(error) )
        } else {
            let theReportId = myReport._id
            this.serviceMessage.getMessages(theReportId)
            .then( response => {
                const data = response;
                return this.setState({ messages: data})
            })
            .catch( error => console.log(error) )
        }
        
      }

    render(){
        return (
            <div className="report-section col-lg-10">
            <Route 
            exact 
            path="/my-created-reports" 
            render={(props) =>(
                <AllReports
                testState = {this.state.reports}
                getReport={this.reportSelected}
                testFunction={this.getReports}
                updateSearch={this.updateSearch}
                userObj = {this.props.userObj._id}
                search={this.state.search}
                {...props} 
                />
            )} 
        />
            <Route 
             exact
             path="/my-created-reports" 
             render={(props) =>(
                 <ReportView
                 updateStatus={this.updateStatus} 
                 updatePriority={this.updatePriority}
                 updateOwner={this.updateOwner}
                 getReport={this.reportSelected}
                 postMessage={this.postMessage}
                 postSent={this.state.postSent}
                 reportMessages={this.state.messages}
                 report = {this.state.report}
                 getUsers = {this.getUsers}
                 users = {this.state.users}
                 userObj = {this.props.userObj._id}
                 deletReportFunction = {this.deletReportFunction}
                 deletMessageFunction = {this.deletMessageFunction}
                 />
             )}
              />
            </div>
                )
            }
}