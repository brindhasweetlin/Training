import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/api.service'


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  employeeModelObj = new EmployeeModel();
  employeeData !:any[];
  firstName:any;
  srchName:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  this.getEmployeeDetails();
  }
  getEmployeeDetails()
  {
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData=res;
    })
  }
deleteEmployee(row:any)
{
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert("Employee Deleted");
    this.getEmployeeDetails()
  })
}
onEdit(row:any)
{
  alert("Iam called");
  this.employeeModelObj.id=row.id;
  this.employeeModelObj.firstName=row.firstName;
  this.employeeModelObj.lastName=row.lastName;
  this.employeeModelObj.email=row.email;
  this.employeeModelObj.mobile=row.mobile;
  this.employeeModelObj.salary=row.salary;

}


searchEmployee()
{
  if (this.srchName=="")
  {
  this.getEmployeeDetails();
  }
  else
  {
    this.employeeData=this.employeeData.filter(res =>
    {
      return res.firstName.toLocaleLowerCase().match(this.srchName.toLocaleLowerCase());
    }
    );
  }
}
key:string = "id";
reverse:boolean=true;
sort(field:string)
{
  this.key=field;
  this.reverse=!this.reverse;

}
trackByData(index:number, employeeData:any) {
  return employeeData.id;
}
}
