import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


    createEmployee(data) {
        return axios.post(EMPLOYEE_API_BASE_URL, data)
    }

    getEmployeeById(Id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + Id);
    }

    updateEmployee(data,id) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id,data);
    }


    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }


}


export default new EmployeeService();