import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';

import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';
import { HighlightBestQuoteDirective } from './highlight-best-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CreateQuoteComponent,
    DateCountPipe,
    HighlightBestQuoteDirective,
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
