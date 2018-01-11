import { Component,OnInit, OnDestroy  } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { Form1}  from './FormData';
import { ConsumeRestAPIService } from './app.services';
//import {AppService}  from './app.services';

interface MyForm {
  name?: string;
  uinnumber?: string;
  mailingaddress?: string;
  email?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ConsumeRestAPIService ]
})
export class AppComponent {
  title = 'app';
  form1: MyForm = {};
  
  constructor(
    private _consumeRestAPIService: ConsumeRestAPIService
  ) {}
  
  email = new FormControl('', [Validators.required, Validators.email]);
  filesDict = {};
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  onFileInput($event, name){
    if($event.target.files && $event.target.files.length > 0){
      this.filesDict[name] = $event.target.files[0];
    }else{
      delete this.filesDict[name];
    }
  }

  onSubmit(){
    //console.log("asdasdasd"+this.name+this.femail)
    //this._consumeRestAPIService.SenDataForm(this.name,this.uinnumber,this.mailingaddress,this.emailaddress).subscribe(response =>{response.data;console.log("test")});
    let formData: FormData = new FormData();
    var i;
    for(i in this.form1){
      formData.append(i, this.form1[i]);
    };

    for(i in this.filesDict){
      if(this.filesDict[i]){
        formData.append(i, this.filesDict[i]);
      }
    };
    
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open('POST', "http://ceinina.com/FormAHS/test_sqlite.php", true);

    // enctype For Multipart Request
    xhr.setRequestHeader("enctype", "multipart/form-data");

    // IE bug fixes to clear cache
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Cache-Control", "no-store");
    xhr.setRequestHeader("Pragma", "no-cache"); 

    xhr.send(formData);
    
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 201) {
            console.log("Success");
        } else {
            console.log("Error");
        }
      }
    }
  }
}
