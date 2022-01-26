import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../module/register';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegistrationserviceService,private router:Router) { }
  ngOnInit(): void {
  }
  registerDetails:Register[]=[];
  tempResDetails:Register = {fname:"",lname:"",email:"", pwd:"", cpwd:""};
  addTo(){
    this.registerDetails.push(this.tempResDetails);
    this.registerService.setData(this.tempResDetails);
    //alert("Succesfully Registered");
    this.router.navigate(['/login']);
    this.tempResDetails=new Register();
    console.log(this.registerDetails);
  }
  
}
