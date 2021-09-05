// Statusbar.js
import React, {Component} from 'react';
import ReportService from '../components/service/reportService';

export default class CreateReport extends Component {
    constructor(props){
        super(props);
        this.state = { title: '', description: '', priority: '' };
        this.service = new ReportService();
      }
      handleFormSubmit = (event) => {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const priority = this.state.priority;
        const status = "Open";
        const reportCreator = this.props.userObj._id;
        const ownerF = " ";
        this.service.createReport(title, description, status, priority, reportCreator, ownerF)
        .then( response => {
            console.log("Report Added")
            this.setState({title: '', description: '', priority: '' });
            console.log("Im about to trigger")
            this.props.getReports()
        })
        .catch( error => console.log(error) )
      }
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }
    render(){
        return (
           <div className="home">
           <form onSubmit={this.handleFormSubmit}>
                <h3>Create Report</h3>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter the title" name="title" value={this.state.title} onChange={ e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="6" cols="50" className="form-control" placeholder="Enter the description" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <label>Priority</label>
                    <select  value={this.state.priority}  onChange={( e => this.handleChange(e))} className="form-control" id="priority" name="priority">
                                <option value="" className="form-control"> </option>
                                <option value="High" className="form-control"  >High</option>
                                <option value="Medium" className="form-control" >Medium</option>
                                <option value="Low" className="form-control" >Low</option>
                            </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
           </div>
                )
            }
}