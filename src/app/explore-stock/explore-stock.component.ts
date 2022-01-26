import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../module/stock';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-explore-stock',
  templateUrl: './explore-stock.component.html',
  styleUrls: ['./explore-stock.component.css']
})
export class ExploreStockComponent implements OnInit {

  constructor(private exploreStockServe: RegistrationserviceService,private router:Router) { }
  objStock:Stock = new Stock();
  ngOnInit(): void {
    this.objStock = this.exploreStockServe.getExploreStock();
  }
  addStock(x:Stock)
  {
    x.totalAmount = x.qty*x.value;
    this.exploreStockServe.setStock(x);
    this.router.navigate(['/dashboard']);
  }
  close()
  {
    this.router.navigate(['homeinvest'])
  }
}
