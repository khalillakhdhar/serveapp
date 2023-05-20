import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculeComponent } from './calcule/calcule.component';

const routes: Routes = [
  {path: '',component: CalculeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
