// Statusbar.js
import React, {Component} from 'react';


export default class Statusbar extends Component {
    render(){
        return (
            <div className="cards">
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Total Reports</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{this.props.total}</div>
                                        </div>
                                        <div class="col-auto">
                                        <img src="https://img.icons8.com/ios/50/000000/bill.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Resolved Reports</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{this.props.closed}</div>
                                        </div>
                                        <div class="col-auto">
                                        <img src="https://img.icons8.com/ios/50/000000/task-completed.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Reports
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{this.props.pending}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                        <img src="https://img.icons8.com/ios/50/000000/data-pending.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-danger shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                                Open Reports</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{this.props.open}</div>
                                        </div>
                                        <div class="col-auto">
                                        <img src="https://img.icons8.com/ios/50/000000/medium-risk.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
</div>
                )
            }
}