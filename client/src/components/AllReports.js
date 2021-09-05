// Statusbar.js
import React, {Component} from 'react';
import ReportService from '../components/service/reportService';

export default class AllReports extends Component {
    constructor(props){
        super(props);
        this.state = {
            reports: [],
            report: [],
            search: ""
        }
        this.service = new ReportService();
      }
    componentDidMount = () =>{
        //this.getReports();
        this.props.testFunction(this.props.userObj)
    }
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
        this.props.updateSearch(value)
      }

      reloadReports(){
        
      }
    render(){
        let filteredTasks = this.props.testState.filter(
            (report) => {
                return Object.keys(report).some(key => report[key].toString().search(this.props.search) !== -1)
            }
        );
        console.log(filteredTasks)
        return (
            <div className="all-reports">
            <div class="container-xl">
                <div class="table-responsive">
                    <div class="table-wrapper">
                    <div className="search-bar">
                        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" name="search" value={this.state.search} onChange={ e => this.handleChange(e)}/>
                    </div>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Created&nbsp;On</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTasks
                                .map((report, index) =>{
                                    return (
                                    <tr key={index} onClick={ () => this.props.getReport(report)}>
                                    <td><span className="badge">{report._id}</span></td>
                                    <td><span className="badge badge-dark">{report.title}</span></td>
                                    <td><span className="badge">{report.createdAt.slice(0, 10)}</span></td>
                                    <td><span className={(report.status == "Open") ? "badge badge-success" : (report.status == "Closed") ? "badge badge-danger" : (report.status == "Pending") ? "badge badge-warning" : ""}>{report.status}</span></td>
                                    <td><span className={(report.priority == "High") ? "badge badge-danger" : (report.priority == "Medium") ? "badge badge-warning" : (report.priority == "Low") ? "badge badge-success" : ""}>{report.priority}</span></td>
                                    <td><span className="badge">{report.owner}</span></td>
                                </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div> 
                </div>   
            </div> 
            </div>
                )
            }
}