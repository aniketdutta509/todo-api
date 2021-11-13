import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public list=[
    {"name":""}
  ]
getEmployee(){
  return this.list
}
  constructor(private http:HttpClient){

   }

   getUserData(){
     let apiurl="https://api.spacexdata.com/v3/missions";
     return this.http.get(apiurl);
   }
}
