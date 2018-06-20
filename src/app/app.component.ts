import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 public employeeDetailsList : any;
 public selectedValue:string ='Select';
  constructor(private _employeeService: EmployeeService){
    this.employeeDetailsList = [];
  }
  getEmployeeData(){
    this._employeeService.getEmployeeData().subscribe(data=>{
      this.employeeDetailsList = data;
      console.log("Data From Service:::: >> ", this.employeeDetailsList);
    })
  }
  getSelectedValue(_employee){
    this.selectedValue = _employee.name;
  }

}
