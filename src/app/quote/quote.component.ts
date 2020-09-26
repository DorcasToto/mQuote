import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  mQuotes: Quote[] = [
    new Quote(0, "If you would convince a man that he does wrong, do right. But do not care to convince him. Men will believe what they see. Let them see.", "Henry David Thoreau", "Dorcas Mosonik", new Date(), 0, 0),
    new Quote(0, "Hide yourself in God, so when a man wants to find you he will have to go there first.", "Shannon L. Alder", "Clinton Thomas", new Date(), 0, 0),
    new Quote(0, "I would rather be an artist than a leader. Ironically, a leader has to follow the rules.", "Criss Jami, Venus in Arms", "Rowena Rono", new Date(), 0, 0),
    new Quote(0, "To bring up a child in the way he should go, travel that way yourself once in a while.", "Josh Billings", "Ronald Kiprotich", new Date(), 0, 0),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
