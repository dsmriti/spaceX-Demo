import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseURL = "https://api.spacexdata.com/v3/launches?limit=100";
  
  launchSuccess():Observable<any> {
    return this.http.get<any>(this.baseURL + "&launch_success=true", {responseType: 'json'});
  }
  launchLandSuccess():Observable<any> {
    return this.http.get<any>(this.baseURL + "&launch_success=true&land_success=true", {responseType: 'json'});
  }
  getAllFilter():Observable<any> {
    return this.http.get<any>(this.baseURL, { params: { launch_success: 'true' }});
  }
  getAllItems():Observable<any> {
    return this.http.get<any>(this.baseURL, {responseType: 'json'});
  }
  encode_query_params(queryJson:any) {
    let keys = Object.keys(queryJson);
    let keys_seperator = "?";
    for(let i=0; i<keys.length; i++) {
        this.baseURL += keys_seperator + keys[i] + "=" + queryJson[keys[i]];
        keys_seperator = "&";
    }
    return this.baseURL;
  }
  test(param):Observable<any> {
    console.log(this.encode_query_params(param))
    return this.http.get<any>(this.encode_query_params(param));
  }
}