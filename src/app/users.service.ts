import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(environment.apiServer + `employee/fetchAll`);
  }
  insertUser(data): Observable<any> {
    return this.http.post<any>(environment.apiServer + `employee/insert`,data);
  }
}
