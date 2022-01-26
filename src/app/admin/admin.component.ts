import { Component, OnInit } from '@angular/core';
import { Mutual } from '../module/mutual';
import { Stock } from '../module/stock';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminServ : RegistrationserviceService) { }

  ngOnInit(): void {
  }
  mutualArray:Mutual = { name:"",value:0, returns:0,sip:0, description:""};
  stockArray:Stock = { name:"",value:0, category:"",qty:1,totalAmount:0,capital:0};

  
  addMutualToHome()
  {
    this.adminServ.setMutualToHome(this.mutualArray);
  }
  addStockToHome()
  {
    this.adminServ.setStockToHome(this.stockArray);
  }
  deleteMutualToHome()
  {
    this.adminServ.deleteMutualFromHome(this.mutualArray.name);
  }
  deleteStockToHome()
  {
    this.adminServ.deleteStockFromHome(this.stockArray);
  }
}
