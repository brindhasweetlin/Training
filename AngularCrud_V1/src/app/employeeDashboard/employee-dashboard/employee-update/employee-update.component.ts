import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { EmployeeModel } from '../employee-dashboard.model';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
formValue!:FormGroup;
id!:any;
show!:Boolean;
 employeeModelUpdateObj = new EmployeeModel();
 employeeData !:any[];
  constructor(private formBuilder:FormBuilder,
    private api:ApiService,
    private _Activatedroute:ActivatedRoute,
   private _router:Router,
   private http:HttpClient
   ) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");

this.api.getEmployeeDetailsById(this.id).subscribe( res => {
this.formValue.controls['firstName'].setValue(res.firstName);
this.formValue.controls['lastName'].setValue(res.lastName);
this.formValue.controls['email'].setValue(res.email);
this.formValue.controls['mobile'].setValue(res.mobile);
this.formValue.controls['salary'].setValue(res.salary);
});
this.formValue=this.formBuilder.group({
  firstName:[''],
  lastName:[''],
  email:[''],
  mobile:[''],
  salary:['']
});
  }

  
//  ngOnChanges() {
//    this.id=this._Activatedroute.snapshot.paramMap.get("id");
//     console.log('ngOnChanges triggered'+this.id);
//  }

//  ngDoCheck() {
//   this.id=this._Activatedroute.snapshot.paramMap.get("id");
//   console.log('ngDoCheck triggered'+this.id);
// }
  getEmployeeDetails()
  {
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData=res;
    })
  }
  updateEmployeeDetails()
  {
    this.employeeModelUpdateObj.id=this.id;
    this.employeeModelUpdateObj.firstName=this.formValue.value.firstName;
      this.employeeModelUpdateObj.lastName=this.formValue.value.lastName;
      this.employeeModelUpdateObj.email=this.formValue.value.email;
      this.employeeModelUpdateObj.mobile=this.formValue.value.mobile;
      this.employeeModelUpdateObj.salary=this.formValue.value.salary;
      this.api.updateEmployee(this.employeeModelUpdateObj,this.employeeModelUpdateObj.id)
      .subscribe(res=>{
        alert("Employee updated Successfully");
       this.getEmployeeDetails();
        this._router.navigate(['/employeeDashboard']);},
        //window.location.href  = 'http://localhost:4200/employeeDashboard';},
      err=>{
        alert("something went wrong");
      }
    )
    } 
}
