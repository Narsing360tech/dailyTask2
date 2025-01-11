import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponantComponent } from './day-1/item-list-componant/item-list-componant.component';
import { CustomePipePractiseComponent } from './day-2/componant/custome-pipe-practise/custome-pipe-practise.component';
import { Day3Component } from './day-3/day-3.component';
import { TaskDay4Component } from './day-4/task-day-4/task-day-4.component';
import { Day5Component } from './day-5/day-5.component';

const routes: Routes = [
  { path: 'day1', component: ItemListComponantComponent },
  { path: 'day2', component: CustomePipePractiseComponent },
  { path: 'day3', component: Day3Component },
  { path: 'day4', component: TaskDay4Component },
  { path: 'day5', component: Day5Component },
  { path: '', redirectTo: '/day1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
