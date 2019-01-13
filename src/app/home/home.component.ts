import { Component, OnInit } from '@angular/core';
import { Quote }    from '../quote';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  // sample quotes array
  quotes = [
    new Quote(1, 'Get busy living or get busy dying.', 'Stephen King', 'Kelly Morgan', 'Life'),

    new Quote(2, 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.', 'Mark Caine', 'Gary Harris', 'Life'),

    new Quote(3, 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.', 'Dr. Suess', 'Heather Langley', 'Love'),

    new Quote(4, 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'Eleanor Roosevelt', 'June Mwangi', 'Work'),

    new Quote(5, 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.', 'Timothy Karanja', 'Marilyn Monroe', 'Famous'),

    new Quote(6, 'A kiss is a lovely trick designed by nature to stop speech when words become superfluous.', 'Wendy Summers', 'Ingrid Bergman', 'Love'),

    new Quote(7, 'You miss 100 percent of the shots you never take.', 'Timothy Karanja', 'Wayne Gretzky', 'Miscellaneous'),

    new Quote(8, 'In order to write about life first you must live it.', 'Juliette Mukami', 'Ernest Hemingway', 'Life'),

    new Quote(9, 'To answer before listening — that is folly and shame.', 'Alexander Gacuhi', 'Bible', 'Religion'),

    new Quote(10, 'You will face many defeats in life, but never let yourself be defeated.', 'Andrew Ranja', 'Maya Angelou', 'Miscellaneous')
  ]
  

  // addNewQuote(quote){
  //   let quoteLength = this.quotes.length;
  //   quote.id = quoteLength +1;
  //   this.quotes.push(quote);

  // }




  

  constructor() { }

  ngOnInit() {
  }

}
