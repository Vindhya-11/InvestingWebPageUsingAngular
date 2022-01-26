import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { AdminComponent } from './admin/admin.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { DetailComponent } from './detail/detail.component';
import { ExploreMutualComponent } from './explore-mutual/explore-mutual.component';
import { ExploreStockComponent } from './explore-stock/explore-stock.component';
import { HomeInvestComponent } from './home-invest/home-invest.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  {path:'demo' , component:DemoComponent},
  {path:'login' , component:LoginComponent},
  {path: 'product', component: ProductComponent },
  {path: 'detail', component: DetailComponent },
  {path:'Acomp' , component:AcompComponent},
  {path:'Bcomp' , component:BcompComponent},
  {path:'register' , component:RegisterComponent},
  {path:'homeinvest' , component:HomeInvestComponent , canActivate: [AuthService]},
  {path:'dashboard' , component:DashboardComponent , canActivate: [AuthService]},
  //{path:'dashboard' , component:DashboardComponent },
  {path:'exploreMutual' , component:ExploreMutualComponent},
  {path:'exploreStock' , component:ExploreStockComponent},
  {path:'admin' , component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
