import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextWriterComponent } from './text-writer/text-writer.component';
import { LabelManagerComponent } from './label-manager/label-manager.component';
import { LabelApplierComponent } from './label-applier/label-applier.component';

const routes: Routes = [
  { path: "text", component: TextWriterComponent },
  { path: "labels", component: LabelManagerComponent },
  { path: "apply", component: LabelApplierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
