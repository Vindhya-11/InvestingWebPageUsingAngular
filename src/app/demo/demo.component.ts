import { Component, OnInit } from '@angular/core';
import { Cart } from '../module/cart';
import { Product } from '../module/product';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productArray: Product[]=[];
  product1: Product = {name:"Apple MacBook Air", description:"13.3 Inch | Apple M1 | 8 GB | macOS Big Sur | 256 GB SSD" , price:84990};
  product2: Product = {name:"Acer Aspire 7", description:"15.6 Inch | Core i5 10th Gen | 8 GB | Windows 10 | 512 GB SSD" , price:52900};
  product3: Product = {name:"ASUS Asus X543MA-GQ1015T", description:"15.6 Inch | Celeron Dual Core | 4 GB | Windows 10 | 1 TB HDD" , price:26900};
  product4: Product = {name:"HP Pavilion Gaming", description:"15.6 Inch | AMD Quad Core Ryzen 5 | 8 GB | Windows 10 | 1 TB HDD" , price:54990};
  product5: Product = {name:"HP 15s-GR0011AU", description:"15.6 Inch | AMD Dual Core Ryzen 3 | 8 GB | Windows 10 | 1 TB HDD" , price:40200};
  
  cartArray: Product[]=[];
  qty=1;
  Grant_total=0;
  total=0;
  total1=0;
  cartArray1: Cart[]=[];
  addProAll()
  {
    this.productArray.push(this.product1);
    this.productArray.push(this.product2);
    this.productArray.push(this.product3);
    this.productArray.push(this.product4);
    this.productArray.push(this.product5);
  }
  
  /*addToCart(obj:Product)
  {
      this.cartArray.push(obj);
      this.Grant_total +=  obj.price*this.qty;
  }*/

  delete(name:string,price:number)
  {
      this.cartArray1.forEach((value,index)=>{
          if(value.name==name) this.cartArray1.splice(index,1);
        });
      this.Grant_total-= price*this.qty;
  }

  addToCart(obj:Product)
  {
    let list: Cart = {name:obj.name,qty:this.qty,price:obj.price,total:obj.price*this.qty};
    console.log(list.qty);
    if(this.qty>1)
    {
      list.total = this.qty*obj.price;
    }
    this.cartArray1.push(list);
    this.Grant_total +=  obj.price*this.qty;
      
  }

  incrementwine(objc:Cart)
  {
    objc.qty+=1;
  }

}
