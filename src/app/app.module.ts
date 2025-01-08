import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponantComponent } from './day-1/item-list-componant/item-list-componant.component';
import { FormsModule } from '@angular/forms';
import { HighlightTextDirective } from './day-1/directive/highlight-text.directive';
import { ConcatPropertyPipe } from './day-2/pipe/concat-property.pipe';
import { CustomePipePractiseComponent } from './day-2/componant/custome-pipe-practise/custome-pipe-practise.component';
import { Day3Component } from './day-3/day-3.component';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { constUserReducer } from './State/day3.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './State/day3.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponantComponent,
    HighlightTextDirective,
    ConcatPropertyPipe,
    CustomePipePractiseComponent,
    Day3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      users: constUserReducer
    }),

    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
