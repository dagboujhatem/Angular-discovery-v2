import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl  = environment.baseUrl;
  constructor(private http: HttpClient) { }

  createEmployee(data: any){
    return this.http.post(`${this.baseUrl}/employees`, data);
  }

  getAllEmployee(){
    return this.http.get(`${this.baseUrl}/employees`);
  }

  deleteEmployeeById(id:any){
    return this.http.delete(`${this.baseUrl}/employees/${id}`);
  }

  getEmployeeById(id:any){
    return this.http.get(`${this.baseUrl}/employees/${id}`);
  }

  updateEmployee(id:any, data: any){
    return this.http.put(`${this.baseUrl}/employees/${id}`, data);
  }
}
