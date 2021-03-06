import { Injectable } from '@angular/core';
import { Mutual } from '../module/mutual';
import { Register } from '../module/register';
import { Stock } from '../module/stock';

@Injectable({
  providedIn: 'root',
})
export class RegistrationserviceService {
  //registrationDetails:Register  = new Register();
  registrationDetails: Register[] = [];
  finalHomeDetails: Register[] = [];
  myMutualArray: Mutual[] = [];
  myMutualArrayToHome: Mutual[] = [];
  myStockArrayToHome: Stock[] = [];
  myStockArray: Stock[] = [];
  objMutual: Mutual = new Mutual();
  objMutualToHome: Mutual = new Mutual();
  objStockToHome: Stock = new Stock();
  objStock: Stock = new Stock();
  totalMutualValue = 0;
  totaStockValue = 0;
  Valid = false;
  boolMutual=false;
  boolStock = false;
  boolRegister = false;
  cummulative=0;
  constructor() {}
  setData(x: Register) {
    this.registrationDetails.push(x);
    this.boolRegister=true;
    console.log(this.registrationDetails);
  }

  isVerify(email: string, pwd: string): boolean {
    for (let i = 0; i < this.registrationDetails.length; i++) {
      if (
        email == this.registrationDetails[i].email &&
        pwd == this.registrationDetails[i].pwd
      ) {
        this.finalHomeDetails.push(this.registrationDetails[i]);
        this.Valid = true;
        return true;
      }
    }
    return false;
  }
  setMutual(x: Mutual) {
    this.totalMutualValue = this.totalMutualValue + Number(x.sip);
    this.myMutualArray.push(x);
  }
  setStock(x: Stock) {
    this.totaStockValue += x.qty * x.value;
    this.myStockArray.push(x);
  }
  getMutual(): Mutual[] {
    return this.myMutualArray;
  }
  getStock(): Stock[] {
    return this.myStockArray;
  }
  getTotal(): number {
    return this.totalMutualValue;
  }
  getTotalStock() {
    return this.totaStockValue;
  }

  setExploreMutual(x: Mutual) {
    this.objMutual = x;
  }
  getExploreMutual(): Mutual {
    return this.objMutual;
  }

  setExploreStock(y: Stock) {
    this.objStock = y;
  }
  getExploreStock(): Stock {
    return this.objStock;
  }
  isValid() {
    return this.Valid;
  }
  setMutualToHome(x: Mutual) {
    this.objMutualToHome = x;
    this.myMutualArrayToHome.push(x);
    this.boolMutual=true;
  }
  setStockToHome(x: Stock) {
    this.objStockToHome = x;
    this.myStockArrayToHome.push(x);
    this.boolStock=true;
  }
  getStockToHome() {
    return this.objStockToHome;
  }
  getMutualToHome() {
    return this.objMutualToHome;
  }
  subMutual(x:Mutual)
  {
    this.cummulative -= Number(x.sip);
    return this.totalMutualValue -= Number(x.sip);
  }
  subStock(x:Stock)
  {
    this.cummulative -= x.qty * x.value
    return this.totaStockValue -= x.qty * x.value;
  }
  getCummulative()
  {
    this.cummulative = this.totalMutualValue + this.totaStockValue;
    return this.cummulative
  }
}
