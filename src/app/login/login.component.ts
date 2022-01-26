import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  pwd:string="";
  isLoginFailed=false;
  constructor(private verifySer:RegistrationserviceService,private router:Router) { }

  verify()
  {
      if(!(this.verifySer.isVerify(this.email,this.pwd)))
      {
        //alert("Wrong Login Credentials");
        this.isLoginFailed=true
      }
      else
      {
        this.router.navigate(['/homeinvest']);
      }
  }

  ngOnInit(): void {
  }

}
