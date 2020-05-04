import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl,testUsername, testPassword, headers } from 'src/environments/environment';
import { Employee } from 'src/app/entities/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  username: string = testUsername;
  password: string = testPassword;

  // private headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

  private url = baseUrl + 'employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {

    return this.http.get<Employee>(`${this.url}/${id}`,{headers});
  }

  createEmployee(employee: Object): Observable<Object> {

    return this.http.post<Employee>(`${this.url}`, employee, {headers});
  }

  updateEmployee(id: number, employee: Object): Observable<Object> {

    return this.http.put<Employee>(`${this.url}/${id}`, employee, {headers});
  }

  deleteEmployee(id: number): Observable<any> {

    return this.http.delete(`${this.url}/${id}`,{headers});

  }

  getEmployeesList(): Observable<any> {

    return this.http.get<Employee[]>(`${this.url}`,{headers});
  }
}
