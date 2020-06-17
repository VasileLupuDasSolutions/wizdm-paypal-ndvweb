import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { PayPalModule } from './paypal';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [   
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,

    PayPalModule.init({
      clientId: 'AWSk0m3BlaYcWEa1c5OCAU4RwnbE1f3R_rxw6bNXXwQfzISTcM1BOhZNElotvguMwZEYHq8HY4Sm41s8', // Using sandbox for testing purposes only
      currency: 'EUR',
      commit: true,
      //vault: true,
      //disableFunding: 'credit,card'
    })
  ],
  
  declarations: [ 
    AppComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
