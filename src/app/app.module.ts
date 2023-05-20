import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculeComponent } from './calcule/calcule.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { AddtodosComponent } from './addtodos/addtodos.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculeComponent,
    TodosComponent,
    AddtodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
