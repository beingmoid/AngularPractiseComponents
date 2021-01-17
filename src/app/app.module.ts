import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';
import { SkeletonLoaderModule} from './skeleton-loader/skeleton-loader.module';
import { from } from 'rxjs';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    ButtonComponent,
    CheckboxComponent,
    TodosComponent,
    TodoItemsComponent,
    MarksheetComponent,
    EmployeeComponent,
    HeaderComponent,
    ProductComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    SkeletonLoaderModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
