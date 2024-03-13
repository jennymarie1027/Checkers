import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameboardComponent } from '../app/components/gameboard/gameboard.component';
import { RouterModule } from '@angular/router';
import { RowComponent } from './components/row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
