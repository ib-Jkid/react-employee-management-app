import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';


export default class UpdateEmployeeConponent extends Component {


    constructor(props) {
        super(props);


        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
            id: props.match.params.id
        }


    }
    changeFirstNameHandler = (event) => {
      
        this.setState({firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value })
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value })
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

    updateEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        
        EmployeeService.updateEmployee(employee,this.state.id).then(data => {
            this.props.history.push('/employees');
        });
    }

    cancel = (e) => {
        e.preventDefault();
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-0">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-4">
                                        <label className="label">First Name</label>
                                        <input type="text"  className="form-control" placeholder="first Name" name="firstName" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className="label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>

                                    <div className="form-group">
                                        <button onClick={this.updateEmployee} className="btn btn-danger">Sumbit</button>
                                        <button onClick={this.cancel} className="btn btn-danger">Cancel</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
