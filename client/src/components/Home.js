// Statusbar.js
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Statusbar from './Statusbar';
import CreateReport from './CreateReport';
import ReportService from '../components/service/reportService';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { total: '', open: "", closed: "", pending: "", stats: [], reports: [] };
        this.service = new ReportService();
        this.getReports = this.getReports.bind(this)
      }
      getReports = (event) => {
          console.log("Im getting triggered")  
        this.service.getAllReport()
        .then( response => {
            const data = response;
            let counts;
            counts = data.reduce((c, { status: key }) => (c[key] = (c[key] || 0) + 1, c), {});
            this.setState({ total: data.length, open: counts.Open, closed: counts.Closed, pending: counts.Pending, reports: data})
        })
        .catch( error => console.log(error) )
      }
      componentDidMount = () =>{
        //this.getReports();
        this.getReports()
    }
    render(){
        return (
            <div className="home-page col-lg-10">
            <Route exact path='/' render={(...props) => (
                      <Statusbar 
                      total={this.state.total}
                      closed={this.state.closed}
                      pending={this.state.pending}
                      open={this.state.open}
                      getReports={this.getReports}/>
                  )} />
            <Route exact path='/' render={(...props) => (
                      <CreateReport 
                      userObj={this.props.userObj}
                      getReports={this.getReports}
                    />
                  )} />
</div>
                )
            }
}