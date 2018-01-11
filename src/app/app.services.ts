import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { Router, CanActivate } from '@angular/router';
import { Observable } from  'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class ConsumeRestAPIService{
   
    constructor(
      private _http: Http
    ){
      
    }
    SenDataForm( name,uid,mailing_address,email ){
        let params = JSON.stringify({ "name": name, "email": email });
       // console.log("name"+name+" / "+"email"+email);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://ceinina.com/FormAHS/test_sqlite.php',params,options)
        .map(res=>res.json());

    }
}