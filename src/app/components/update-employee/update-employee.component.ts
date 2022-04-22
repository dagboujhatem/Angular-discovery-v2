import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm?: FormGroup;
  submitted = false;
  id: any;
  constructor(private employeeService:EmployeeService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      age : new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
      salary : new FormControl('', [Validators.required]),
    });
    this.getCurrentEmployee();
  }

  getCurrentEmployee(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((response:any)=>{
      // console.log(response);
      this.employeeForm?.patchValue(response);
    }, (error:any)=>{
      console.log(error);
    })
  }

  updateEmployeeByID(){
    this.submitted = true;
    if(this.employeeForm?.invalid){
      return;
    }

    // déclancher l'update
    this.employeeService.updateEmployee(this.id, this.employeeForm?.value).subscribe((response:any)=>{
      // console.log(response);
      this.router.navigateByUrl('/list');
    }, (error:any)=>{
      console.log(error);
    })
    
  }

}
