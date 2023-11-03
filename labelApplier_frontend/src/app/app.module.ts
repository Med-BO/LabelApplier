import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextWriterComponent } from './text-writer/text-writer.component';
import { LabelManagerComponent } from './label-manager/label-manager.component';
import { LabelApplierComponent } from './label-applier/label-applier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaderResponse } from '@angular/common/http';
import { NgxAnnotateTextModule } from 'ngx-annotate-text';

@NgModule({
  declarations: [
    AppComponent,
    TextWriterComponent,
    LabelManagerComponent,
    LabelApplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    NgxAnnotateTextModule
  ],
  providers: [HttpClient, HttpClientModule, HttpHeaderResponse],
  bootstrap: [AppComponent]
})
export class AppModule { }
