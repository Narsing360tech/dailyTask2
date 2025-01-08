import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponantComponent } from './day-1/item-list-componant/item-list-componant.component';
import { CustomePipePractiseComponent } from './day-2/componant/custome-pipe-practise/custome-pipe-practise.component';

const routes: Routes = [
  { path: 'day1', component: ItemListComponantComponent },
  { path: 'day2', component: CustomePipePractiseComponent },
  { path: '', redirectTo: '/day1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
