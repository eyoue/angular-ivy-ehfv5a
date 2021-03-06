import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CryptoProModule } from './crypto-pro/crypto-pro.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CryptoProModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
