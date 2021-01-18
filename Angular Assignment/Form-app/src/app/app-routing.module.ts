import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormHomeComponent } from './form-home/form-home.component';

const routes: Routes = [
  {path: '', component:FormHomeComponent},
  {path: 'formEdit', component:FormEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  FormHomeComponent,
  FormEditComponent
];