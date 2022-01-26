import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mutual } from '../module/mutual';
import { Product } from '../module/product';
import { Stock } from '../module/stock';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-home-invest',
  templateUrl: './home-invest.component.html',
  styleUrls: ['./home-invest.component.css']
})
export class HomeInvestComponent implements OnInit {

  constructor(private homeSer:RegistrationserviceService, private router:Router) { }

  ngOnInit(): void {
   //this.getMutual()
   if(this.boolMutual)
   {
     this.getMutual();
   }
   if(this.boolStock)
   {
     this.getStock();
   }
  
  }
  
  queryMutual:string="";
  queryStock:string="";
  mutual1:Mutual = {name:"ICICI Prudential", description:"High Risk | Equity", returns:43.3,sip:0,value:184.07};
  mutual2:Mutual = {name:"Axis Small Cap", description:"Very High Risk | Equity", returns:34.2,sip:0,value:70.35};
  mutual3:Mutual = {name:"Tata Digital India", description:"High Risk | Equity", returns:42.69,sip:0,value:44.37};
  mutual4:Mutual = {name:"Nippon India", description:"Very High Risk | Equity", returns:33.34,sip:0,value:98.79};
  mutual5:Mutual = {name:"Aditya Birla Direct", description:"Moderate Risk | Debt", returns:7.23,sip:0,value:572.74};
  mutual6:Mutual = {name:"HDFC Small Cap", description:"High Risk | Equity", returns:22.42,sip:0,value:72.74};
  mutual7:Mutual = {name:"Qnant Active", description:"Moderate Risk | Debt", returns:9.23,sip:0,value:447.24};
  mutual8:Mutual = {name:"LIC MF Large", description:"High Risk | Equity", returns:23.10,sip:0,value:27.64};
  mutual9:Mutual = {name:"SBI Balanced", description:"Moderate Risk | Hybrid", returns:2.03,sip:0,value:10.33};
  mutualArray:Mutual[]=[this.mutual1,this.mutual2,this.mutual3,this.mutual4,this.mutual5,this.mutual6];

  stock1:Stock = {name:"Bajaj Finserv", category:"Financial Service",qty:1,totalAmount:0, value:18409, capital:28834534.0};
  stock2:Stock = {name:"Bajaj Finance", category:"Consumer Finance",qty:1,totalAmount:0, value:7893, capital:46634534.0};
  stock3:Stock = {name:"ONGC", category:"Oil, Gas & Fuel",qty:1,totalAmount:0, value:168.07, capital:20634534.0};
  stock4:Stock = {name:"ICICI Bank", category:"Banks",qty:1,totalAmount:0, value:810.07, capital:56644534.0};
  stock5:Stock = {name:"Hindustan Unilever", category:"Personal Product",qty:1,totalAmount:0, value:2268.07, capital:56278534.0};
  stock6:Stock = {name:"Bharat Airtel", category:"Telecom Service",qty:1,totalAmount:0, value:710.27, capital:45564534.0};
  stock7:Stock = {name:"Wipro", category:"IT Service",qty:1,totalAmount:0, value:615.98, capital:39964934.0};
  stockArray:Stock[]=[this.stock1,this.stock2,this.stock3,this.stock4,this.stock5,this.stock6];
  boolMutual= this.homeSer.boolMutual;
  boolStock= this.homeSer.boolStock;
  addMutual(x:Mutual)
  {
    this.homeSer.setMutual(x);
  }
  addStock(x:Stock)
  {
    this.homeSer.setStock(x);
  }

  exploreMutual(x:Mutual)
  {
    this.homeSer.setExploreMutual(x);
    this.router.navigate(['exploreMutual']);
  }

  exploreStock(x:Stock)
  {
    this.homeSer.setExploreStock(x);
    this.router.navigate(['exploreStock']);
  }

  getMutual()
  {
    this.mutualArray.push(this.homeSer.getMutualToHome());
  }
  getStock()
  {
    this.stockArray.push(this.homeSer.getStockToHome());

  }
}
