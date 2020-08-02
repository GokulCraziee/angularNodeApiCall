import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestHandlerService {
  readonly ROOT_URL;
  constructor(private http : HttpClient) { 
    this.ROOT_URL = "http://localhost:3000";
  }

  get(uri : string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  
  post(uri : string , payload : string) {
    const headers = new HttpHeaders()
           .set('Content-Type', 'application/json');
    let body = JSON.stringify({data : payload});
    console.log(body);
    return this.http.post(`${this.ROOT_URL}/${uri}`,body);
  }
}
