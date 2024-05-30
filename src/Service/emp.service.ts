import axios from "axios";

const BASE_API_URL = "http://16.170.119.197:8080/api/v1/";

interface Emp {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  salary: number | null;
}

class EmpService {
  saveEmp(formData: Emp) {
    return axios.post(BASE_API_URL + "save", formData);
  }

  getAllEmp() {
    return axios.get(BASE_API_URL);
  }

  getEmpById(empId: number) {
    return axios.get(BASE_API_URL + empId);
  }

  deleteEmpById(empId: number) {
    return axios.delete(BASE_API_URL + "delete/" + empId);
  }

  updateEmp(emp: Emp, empId: number) {
    return axios.put(BASE_API_URL + "update/" + empId, emp);
  }
}

export default new EmpService();
