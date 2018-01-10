import { Component,OnInit, OnDestroy  } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
import {Form1}  from './FormData';
import { ConsumeRestAPIService } from './app.services';
//import {AppService}  from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConsumeRestAPIService ]
})
export class AppComponent {
  title = 'app';
  //public form1:Form1;
  name:string='';
  uinnumber:string='';
  mailingaddress:string='';
  emailaddress:string='';
  
  constructor(
    private _consumeRestAPIService: ConsumeRestAPIService
  ) {}
  
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }

    onSubmit(){
      //console.log("asdasdasd"+this.name+this.femail)
      this._consumeRestAPIService.SenDataForm(this.name,this.uinnumber,this.mailingaddress,this.emailaddress).subscribe(response =>{response.data;console.log("test")});
      
    }
}
