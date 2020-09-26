
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', new Date(), 0, 0);

  submitQuote() {


  }

  constructor() { }

  ngOnInit(): void {
  }

}
