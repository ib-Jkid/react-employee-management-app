import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';


export default class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            id: props.match.params.id
        }
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            let employee = res.data;

        

            this.setState({ 
                firstName: employee.firstName, 
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }
    render() {
        return (
            <div>
                <div className="card col-md-0">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <span>Employee First Name: </span>
                            <span>{this.state.firstName}</span>
                        </div>
                        <div className = "row">
                            <label>Employee Last Name: </label>
                            <span>{this.state.lastName}</span>
                        </div>
                        <div className = "row">
                            <label>Employee Email: </label>
                            <span>{this.state.emailId}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
