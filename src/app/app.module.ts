import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponantComponent } from './day-1/item-list-componant/item-list-componant.component';
import { FormsModule } from '@angular/forms';
import { HighlightTextDirective } from './day-1/directive/highlight-text.directive';
import { ConcatPropertyPipe } from './day-2/pipe/concat-property.pipe';
import { CustomePipePractiseComponent } from './day-2/componant/custome-pipe-practise/custome-pipe-practise.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponantComponent,
    HighlightTextDirective,
    ConcatPropertyPipe,
    CustomePipePractiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
