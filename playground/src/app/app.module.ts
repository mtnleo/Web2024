import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { CapitalizeAllDirective } from './capitalize-all.directive';
import { ChangeVowelsPipe } from './change-vowels.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CapitalizeAllDirective,
    ChangeVowelsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
