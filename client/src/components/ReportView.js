// ReportView.js
import React, {Component} from 'react';
import axios from 'axios';
import ReportService from '../components/service/reportService';

export default class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            postSent: false,
            owner: ""
        }
        this.service = new ReportService();
      }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.report.status !== nextProps.report.status) {
            this.state.status = nextProps.status
        }
        if(this.props.report.priority !== nextProps.report.priority){
            this.state.priority = nextProps.priority
        }
        if(this.props.report.owner !== nextProps.report.owner){
            this.state.owner = nextProps.owner
        }
        if(this.props.postSent !== this.state.postSent){
            this.state.message = "";
            this.state.postSent = false
        }
        return true;}

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
        if(name == "status"){
            this.props.updateStatus(this.props.report._id, value, this.props.report.userinfo)
        } else if(name == "priority"){
            this.props.updatePriority(this.props.report._id, value, this.props.report.userinfo)
        } else if(name == "owner"){
            this.props.updateOwner(this.props.report._id, value, this.props.report.userinfo)
        }
        
      }
      
 /*
      getReport = (event) => {  
        this.service.getOneReport()
        .then( response => {
            const data = response;
            console.log("i fetched the data", data)
            return this.setState({ report: data})
        })
        .catch( error => console.log(error) )
      }
*/
    render(){
        let checkIfEmpty = this.props.report;
        if(checkIfEmpty == 0){
            return (
                <div className="report-closed">
                    Click on a report.
                </div>
    )
        }
        let checkOwner;
        let msgOwner
        if(this.props.userObj === this.props.report.reportCreator){
            checkOwner = <span className="close-button" onClick={ () => this.props.deletReportFunction(this.props.report._id)}><img src="https://img.icons8.com/wired/36/000000/close-window.png"/></span>
        }

            return (
                <div className="report container-xl">
                    <div className="reportHead">
                            <div className="reportHeadBox">
                                <div className="report-head-box-left">
                                <span><b>Task ID</b></span>
                                <span>{this.props.report._id}</span>
                                </div>
                                {checkOwner}
                            </div>
                            <div className="reportHeadTitle">
                            <span>{this.props.report.title}</span>
                            <span className="report-creator">Created By: {this.props.report.userinfo[0].username}</span>
                            </div>
                            <div className="option-box">
                            <form>
                                <div className="form-label">
                                <label for="status">Status</label>
                            <select  value={this.state.status}  onChange={( e => this.handleChange(e))} className={(this.props.report.status == "Open") ? "badge badge-danger selectpicker" : (this.props.report.status == "Closed") ? "badge badge-success selectpicker" : (this.props.report.status == "Pending") ? "badge badge-warning selectpicker" : ""} id="status" name="status">
                                <option value="Open" className="option badge badge-danger" selected={(this.props.report.status == "Open") ? "selected" : ""} >Open</option>
                                <option value="Pending" className="option badge badge-warning" selected={(this.props.report.status == "Pending") ? "selected" : ""}>Pending</option>
                                <option value="Closed" className="option badge badge-success" selected={(this.props.report.status == "Closed") ? "selected" : ""}>Closed</option>
                            </select>
                            </div>
                            <div className="form-label">
                            <label for="status">Owner</label>
                            <select onChange={ e => this.handleChange(e)} id="owner" name="owner" className="badge badge-info">
                            <option value={this.state.owner} className="option badge badge-info"> </option>
                            {this.props.users
                            .map((user, index) =>{
                                return (
                                    <option key={index} value={this.state.owner} selected={(this.props.report.owner === user.username) ? "selected" : ""} className="option badge badge-info">{user.username}</option>
                                )
                            })}
                            
                            </select>
                            </div>
                            <div className="form-label">
                            <label for="status">Priority</label>
                            <select value={this.state.priority} onChange={ e => this.handleChange(e)} className={(this.props.report.priority == "High") ? "badge badge-danger" : (this.props.report.priority == "Medium") ? "badge badge-warning" : (this.props.report.priority == "Low") ? "badge badge-success" : ""} id="priority" name="priority">
                                <option value="High" className="option badge badge-danger" selected={(this.props.report.priority == "High") ? "selected" : ""}>High</option>
                                <option value="Medium" className="option badge badge-warning" selected={(this.props.report.priority == "Medium") ? "selected" : ""}>Medium</option>
                                <option value="Low" className="option badge badge-success" selected={(this.props.report.priority == "Low") ? "selected" : ""}>Low</option>
                            </select>
                            </div>
                            </form>
                            </div>
                        </div>
                    <div className="reportBody">
                        <p>{this.props.report.description}</p>
                    </div>
                    <div className="report-footer">
                        <div class="p-2">
                            <form>
                            <div class="d-flex flex-row align-items-start"><textarea name="message" onChange={ e => this.handleChange(e)} value={this.state.message} class=" textarea-comment form-control ml-1 shadow-none textarea"></textarea></div>
                            <div class="mt-2 text-right"><button onClick={ e => this.props.postMessage(this.state.message)} class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button></div>
                            </form>
                        </div>
                        <div>
                            <div className="message-box-ul">
                                {this.props.reportMessages
                                .map((message, index) =>{
                                    return (
                                        <div key={index} className="message-box">
                                        <div className="message-box-user">
                                        <span>{message.userinfo[0].username}</span>
                                        {  (this.props.userObj === message.messageCreator) ? <span onClick={ () => this.props.deletMessageFunction(message._id, this.props.report._id)} ><img src="https://img.icons8.com/wired/16/000000/close-window.png"/></span> : ""}
                                        </div>
                                        <div className="message-box-content">
                                        <span>{message.message}</span>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
    
                    )
        
            }
}
