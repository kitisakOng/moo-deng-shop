import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileComponent } from './profile/profile.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ShoppingMallComponent } from './shopping-mall/shopping-mall.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AuthInterceptor } from './security/auth.interceptor';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { ProductComponent } from './product/product.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { AddressComponent } from './profile/address/address.component';
import { OrdersComponent } from './profile/orders/orders.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    FavoriteComponent,
    ShoppingMallComponent,
    ProductComponent,
    ProfileComponent,
    ProfileDetailComponent,
    AddressComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzModalModule,
    NzGridModule,
    NzInputModule,
    NzMenuModule,
    NzCarouselModule,
    NzImageModule,
    NzSpaceModule,
    NzCardModule,
    NzIconModule,
    NzFlexModule,
    NzRateModule,
    NzFormModule,
    NzBreadCrumbModule,
    NzEmptyModule,
    NzPopoverModule,
    NzSwitchModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
