import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost/gameZoneAPI/";
  constructor(private http: HttpClient) { }

  validation(user:any){
    return this.http.post(`${this.url}validator.php`,JSON.stringify(user));
  }
}
