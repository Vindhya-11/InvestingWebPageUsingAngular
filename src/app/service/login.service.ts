import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  appData:string="";
  constructor() { }

  setData(data:string)
  {
    console.log(this.appData);
    this.appData=data;
  }
  getData():string
  {
    return this.appData;
  }
}
