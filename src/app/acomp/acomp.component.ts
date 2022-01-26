import { Component, OnInit } from '@angular/core';
import { Car } from '../module/car';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-acomp',
  templateUrl: './acomp.component.html',
  styleUrls: ['./acomp.component.css']
})
export class AcompComponent implements OnInit {

  data:string="";
  //carDetails: Car = new Car();
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  save()
  {
    this.loginService.setData(this.data);
    console.log(this.data);
  }

}
