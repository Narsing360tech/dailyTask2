import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponantComponent } from './day-1/item-list-componant/item-list-componant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TaskDay4Component } from './day-4/task-day-4/task-day-4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Day5Component } from './day-5/day-5.component';
import { ProductListComponent } from './day-8/product-list/product-list.component';
import { ProductSummaryComponent } from './day-8/product-summary/product-summary.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponantComponent,
    HighlightTextDirective,
    ConcatPropertyPipe,
    CustomePipePractiseComponent,
    Day3Component,
    TaskDay4Component,
    Day5Component,
    ProductListComponent,
    ProductSummaryComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
