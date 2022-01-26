import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-bcomp',
  templateUrl: './bcomp.component.html',
  styleUrls: ['./bcomp.component.css']
})
export class BcompComponent implements OnInit {

  data:string="";
  constructor(private loginService:LoginService) { }
  ngOnInit(): void {
  }

  Retrive()
  {
    this.data=this.loginService.getData();
  }

}
