import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7019/api/Contact'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetAllContacts`);
  }

  addData(data : any) : Observable<any>
  {
    return this.http.post(`${this.apiUrl}/AddContact`,data)
  }

  
  updateData(data : any) : Observable<any>
  {
    return this.http.put(`${this.apiUrl}/UpdateContact/${data.id}`,data)
  }

  deleteData(id: number) : Observable<any>{
    return this.http.delete(`${this.apiUrl}/DeleteContact/${id}`)
  }

  getDataById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetContactById/${id}`)
  }

  login(email: Text, password: Text) : Observable<any>
  {
    var data = {
      email, password
    };

    return this.http.post(`${this.apiUrl}/login`,data)
  }
}

