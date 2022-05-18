import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { MainPartComponent } from './user/home/main-part/main-part.component';
import { ImgSliderComponent } from './user/home/img-slider/img-slider.component';
import { WhyUsComponent } from './user/home/why-us/why-us.component';
import { HeaderComponent } from './user/header/header.component';
import { NavLinksComponent } from './user/nav-links/nav-links.component';
import { FooterComponent } from './user/footer/footer.component';
import { SignupComponent } from './user/signup/signup.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { HttpClientModule} from "@angular/common/http";
import { OtpCheckerComponent } from './user/otp-checker/otp-checker.component';
import { MediaGeneralComponent } from './user/media-general/media-general.component';
import { MediaSpecificComponent } from './user/media-specific/media-specific.component';
import { TempleSpecificComponent } from './user/temple-specific/temple-specific.component';
import { TemplePujaOneComponent } from './user/temple-puja-one/temple-puja-one.component';
import { MediaOneComponent } from './user/media-one/media-one.component';
import { EventComponent } from './user/event/event.component';
import { EventOneComponent } from './user/event-one/event-one.component';
import { ShopGeneralComponent } from './user/shop-general/shop-general.component';
import { ShopGeneralAllComponent } from './user/shop-general-all/shop-general-all.component';
import { ShopSpecificComponent } from './user/shop-specific/shop-specific.component';
import { ViewMoreComponent } from './user/view-more/view-more.component';
import { SafePipePipe } from './safe-pipe.pipe';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { OrderComponent } from './user/order/order.component';
import { PlaceOrderComponent } from './user/place-order/place-order.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPartComponent,
    ImgSliderComponent,
    WhyUsComponent,
    HeaderComponent,
    NavLinksComponent,
    FooterComponent,
    SignupComponent,
    DashboardComponent,
    OtpCheckerComponent,
    MediaGeneralComponent,
    MediaSpecificComponent,
    TempleSpecificComponent,
    TemplePujaOneComponent,
    MediaOneComponent,
    EventComponent,
    EventOneComponent,
    ShopGeneralComponent,
    ShopGeneralAllComponent,
    ShopSpecificComponent,
    ViewMoreComponent,
    SafePipePipe,
    EditProfileComponent
    SearchResultComponent,
    OrderComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
