import React, { Component } from 'react'

import EmployeeService  from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)


        this.state = {
            employees: []
        }
    }
    componentDidMount() {
       EmployeeService.getEmployee().then((res) => {
           console.log(res.data);
           this.setState({employees: res.data});
       }) 
    }
    addEmployee = () => {
        this.props.history.push("/add-employee");
    }

    updateEmployee = (id) => {

        this.props.history.push(`/update-employee/${id}`);
    }

    viewEmployee = (id) => {

        this.props.history.push(`/view-employee/${id}`);
    }

    deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(res => {
            if(res.data.deleted) {
                this.setState({employees: this.state.employees.filter(emp => emp.id !== id)});
            }
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(employee => 
                                    <tr key = {employee.id}>
                                        <td>{ employee.firstName }</td>
                                        <td>{ employee.lastName }</td>
                                        <td>{ employee.emailId   }</td>
                                        <td>
                                            <button onClick={() => {this.viewEmployee(employee.id)} }  className="btn btn-info mr-2">View</button>

                                            <button onClick={() => {this.updateEmployee(employee.id)} } className="btn btn-info mr-2">Update</button>
                                            <button onClick={() => {this.deleteEmployee(employee.id)} }  className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
