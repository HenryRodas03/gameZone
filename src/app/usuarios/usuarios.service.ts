import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://localhost/gameZoneAPI/";
  constructor(private http: HttpClient) { }

  return(){
    return this.http.get(`${this.url}select.php`)
  }

  sendData(user:any){
    return this.http.post(`${this.url}insert.php`,JSON.stringify(user));
  }

}
