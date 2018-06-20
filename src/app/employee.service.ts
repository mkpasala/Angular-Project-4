import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{

    constructor(private _http:Http) {
        
    }

    getEmployeeData(){
        return this._http.get("https://jsonplaceholder.typicode.com/users").map((res:Response)=>res.json())
    }
    
}