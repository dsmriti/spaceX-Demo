import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseURL = "https://api.spacexdata.com/v3/launches?limit=100";
  
  getAllItems():Observable<any> {
    return this.http.get<any>(this.baseURL, {responseType: 'json'});
  }
  encode_query_params(queryJson:any) {
    let keys = Object.keys(queryJson);
    let keys_seperator = "&";
    let url = this.baseURL;
    for(let i=0; i<keys.length; i++) {
      if (queryJson[keys[i]] != "") {
        url += keys_seperator + keys[i] + "=" + queryJson[keys[i]];
      }
    }
    return url;
  }
  getfilter(url):Observable<any> {
    return this.http.get<any>(url);
  }
}