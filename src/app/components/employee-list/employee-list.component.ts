import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAllEmployee().subscribe((response:any)=>{
      this.employees = response;
    }, (error)=>{
      console.log(error)
    });
  }

  deleteEmployee(id :any){
    this.employeeService.deleteEmployeeById(id).subscribe((response:any)=>{
      this.getAllEmployees();
    }, (error)=>{
      console.log(error)
    });
  }

}
