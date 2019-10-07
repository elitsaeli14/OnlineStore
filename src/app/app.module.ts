import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TvDetailsComponent,
    TopBarComponent,
    CartComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: ListComponent },
      {path: 'television/:televisionId', component: TvDetailsComponent},
      {path: 'phone/:phoneId', component: PhoneDetailsComponent},
      {path: 'cart', component: CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
