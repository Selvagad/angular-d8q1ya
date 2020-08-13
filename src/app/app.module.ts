import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileUploadComponent } from './upload.component'

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    FileUploadComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
