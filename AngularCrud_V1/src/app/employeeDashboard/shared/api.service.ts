import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map} from 'rxjs/operators'
import { EmployeeModel } from '../employee-dashboard/employee-dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employeeModelObj = new EmployeeModel();
  employeeData !:any[];

  constructor(private http:HttpClient) { }

  postEmployee(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }

  getEmployee()
  {
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
  updateEmployee(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
  deleteEmployee(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
   getEmployeeDetailsById(id:number)
    {
//     this.getEmployee()
//     .subscribe(res=>{
//       this.employeeData=res;
//     })
//   console.log("Employee Data"+this.employeeData);
//   console.log(this.employeeData.find(e => e.id==id));
//    return this.employeeData.find(e =>
//     {
//       e.id==id 
     
//       //console.log(e,typeof e);
//       //console.log("Matching Id"+e.id);
//     } 
//    );
//     //console.log(e,typeof e);
return this.http.get<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>
    {
      //console.log(res);
      return res;
    }))
  
 }
}
