import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usuarios2Service {

  url = "http://localhost/gameZoneAPI/";
  constructor(private http: HttpClient) { }

  return(){
    return this.http.get(`${this.url}select.php`)
  }
}
