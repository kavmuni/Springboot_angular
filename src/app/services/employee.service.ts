import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get("/server/api/v1/employees");
  }

  getEmployee(id: Number){
    return this.http.get("server/api/v1/employees" + id);

  }

  createEmployeeReigstration(employee){
    let body = JSON.stringify(employee);
    return this.http.post("/server/api/v1/employees", body, httpOptions);
  }
}
