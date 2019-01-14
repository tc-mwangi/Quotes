import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { QUOTES } from '../mock-quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

      // sample quotes array
  quotes = [
    
  ]

  addmodel(quote){
    let quoteLength = this.quotes.length;
    quote.id = quote.Length+1;
    quote.quote = quote;
    quote.author = quote;
    this.quotes.push(quote)

}

  // quotes = QUOTES;


  // selectedQuote: Quote;



  




  constructor() { }

  ngOnInit() {
  }

  // onSelect(quote: Quote): void {
  //   this.selectedQuote = quote;
  // }

}



