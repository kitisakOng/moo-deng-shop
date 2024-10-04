import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';
import { ShoppingMallDetailComponent } from './shopping-mall/shopping-mall-detail/shopping-mall-detail.component';
import { ProductComponent } from './product/product.component';
import { RecommendResolver } from './shared/resolvers/recommend.resolver';
import { OrdersComponent } from './profile/orders/orders.component';
import { AddressComponent } from './profile/address/address.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { recommendeds: RecommendResolver } },
  { path: 'carts', component: CartComponent },
  { path: 'coupons', component: CartComponent },
  { path: 'profile', component: ProfileComponent, children: [
    {path: '', component: ProfileDetailComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'address', component: AddressComponent}
  ] },
  { path: 'favoritie', component: FavoriteComponent },
  {
    path: 'shopping-mall', component: ShoppingMallComponent, children: [
      { path: ':id', component: ShoppingMallDetailComponent }
    ]
  },
  { path: 'products/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
