import { Component, OnInit } from '@angular/core';
import { Mutual } from '../module/mutual';
import { Stock } from '../module/stock';
import { RegisterComponent } from '../register/register.component';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashServ:RegistrationserviceService) { }
  queryMutual="";
  queryStock="";
  total_mutual_value=0;
  total_stock_value=0;
  cummulativeValue=0;
  mutualArray:Mutual[]= [];
  stockArray:Stock[]= [];
  ngOnInit(): void {
      this.mutualArray = this.dashServ.getMutual();
      this.stockArray = this.dashServ.getStock();
      this.total_mutual_value = this.dashServ.getTotal();
      this.total_stock_value = this.dashServ.getTotalStock();
      this.cummulativeValue= this.total_mutual_value + this.total_stock_value;
      console.log(JSON.stringify(this.mutualArray));
  }
  

}
