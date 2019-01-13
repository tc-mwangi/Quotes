import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  // quote object
  quote: Quote = {
    id: 0,
    quote: 'Life sucks',
    author: 'Confucious',
    contributor: 'Jiliette Mukami',
    category: 'life',
    dateSubmitted: new Date(2018,3,14)
  }


  constructor() { }

  ngOnInit() {
  }

}
