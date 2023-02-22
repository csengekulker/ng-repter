import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFlights() {
    let endpoint = 'jaratok'
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }


}
