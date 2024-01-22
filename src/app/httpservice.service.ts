import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

@Injectable({
    providedIn:'root'
})


export class HttpService{

    constructor(private http:HttpClient){

    }

 api='https://jsonplaceholder.typicode.com/posts'


 getdata():Observable<any[]>{
    return this.http.get<any[]>(this.api)
 }


 putData(userId:number,id:number, updatedata:any):Observable<any>{
    const updatedDataWithId = {userId, id, ...updatedata };
    console.log(updatedDataWithId);
    

    const one= `${this.api}/${id}`

   return this.http.put(one,updatedDataWithId,httpOptions)
 }

 postData():Observable<any>{
   return this.http.post(this.api,{'userId':1,'title':"koorad",'body':"sindhabad sindhabad"},httpOptions)
 }


 Deletee(num:number){

    const url=`${this.api}/${num}`
    return this.http.delete(url,httpOptions)
 }


 patch(num:number){
    const sin=`${this.api}/${num}`
    return this.http.patch(sin,{body:"sugumarakkuripp"},httpOptions)

 }





}