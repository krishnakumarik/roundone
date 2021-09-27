import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClipboardModule} from '@angular/cdk/clipboard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),ClipboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
