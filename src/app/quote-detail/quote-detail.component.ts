import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})


export class QuoteDetailComponent implements OnInit {

  // quotes array
  quotes = [
  ];

  addmodel(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quote = quote;
    this.quotes.push(quote)

  }




  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
