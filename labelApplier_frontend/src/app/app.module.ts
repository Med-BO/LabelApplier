import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextWriterComponent } from './text-writer/text-writer.component';
import { LabelManagerComponent } from './label-manager/label-manager.component';
import { LabelApplierComponent } from './label-applier/label-applier.component';

@NgModule({
  declarations: [
    AppComponent,
    TextWriterComponent,
    LabelManagerComponent,
    LabelApplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
