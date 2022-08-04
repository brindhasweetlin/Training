import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { EmployeeModel } from '../employee-dashboard.model';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeModelObj = new EmployeeModel();
  formValue !:FormGroup;
  showAdd !:boolean;
  showUpdate!:boolean;
  employeeData !:any[];

  constructor(private formBuilder : FormBuilder,
    private api:ApiService,
    private _Activatedroute:ActivatedRoute,
   private _router:Router) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
    
    this.getEmployeeDetails()
  }

  getEmployeeDetails()
  {
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData=res;
    })
  }
  clickAdd()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
postEmployeeDetails()
{
  this.employeeModelObj.firstName=this.formValue.value.firstName;
  this.employeeModelObj.lastName=this.formValue.value.lastName;
  this.employeeModelObj.email=this.formValue.value.email;
  this.employeeModelObj.mobile=this.formValue.value.mobile;
  this.employeeModelObj.salary=this.formValue.value.salary;
  this.api.postEmployee(this.employeeModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Employee added Successfully");
    //this.formValue.reset()
    this.getEmployeeDetails()
    this._router.navigate(['/employeeDashboard']);
   // window.location.href  = 'http://localhost:4200/employeeDashboard';
  },
    err=>{
      alert("something went wrong");
    }
  )
}


}
