import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
