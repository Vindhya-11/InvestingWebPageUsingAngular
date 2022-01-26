import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { RegisterComponent } from './register/register.component';
import { HomeInvestComponent } from './home-invest/home-invest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPipe } from './pipes/search.pipe';
import { AdminComponent } from './admin/admin.component';
import { ExploreMutualComponent } from './explore-mutual/explore-mutual.component';
import { ExploreStockComponent } from './explore-stock/explore-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    DetailComponent,
    ProductComponent,
    AcompComponent,
    BcompComponent,
    RegisterComponent,
    HomeInvestComponent,
    DashboardComponent,
    SearchPipe,
    AdminComponent,
    ExploreMutualComponent,
    ExploreStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
