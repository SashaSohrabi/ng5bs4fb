import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {RouterModule} from '@angular/router';
import {environment} from '../environments/environment';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {UserService} from './user.service';
import {AdminAuthGuardService} from './admin-auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    BsNavbarComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},

      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
