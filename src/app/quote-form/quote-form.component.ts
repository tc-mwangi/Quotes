import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import quote class
import { Quote }    from '../quote'; 

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

    // option tag loop options
    options = [
      {category: ''},
      {category: 'Life'},
      {category: 'Love'},
      {category: 'Work'},
      {category: 'Religion'},
      {category: 'Famous'},
      {category: 'Miscellaneous'}
  
    ];

        // object to loop through loop quotes
        displayQuotes = [
          {quote: ''},
          {author: ''}
        ];



      // sample quotes array
  quotes = [
    new Quote(1, 'Get busy living or get busy dying.', 'Stephen King', 'Kelly Morgan', 'Life', 'new Date(2018,3,14)'),

    new Quote(2, 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.', 'Mark Caine', 'Gary Harris', 'Life','new Date(2018,3,14)'),

    new Quote(3, 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.', 'Dr. Suess', 'Heather Langley', 'Love', 'new Date(2018,3,14)'),

    new Quote(4, 'Great minds discuss ideas; average minds discuss events; small minds discuss people.', 'Eleanor Roosevelt', 'June Mwangi', 'Work','new Date(2018,3,14)'),

    new Quote(5, 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.', 'Timothy Karanja', 'Marilyn Monroe', 'Famous','new Date(2018,3,14)'),

    new Quote(6, 'A kiss is a lovely trick designed by nature to stop speech when words become superfluous.', 'Wendy Summers', 'Ingrid Bergman', 'Love','new Date(2018,3,14)'),

    new Quote(7, 'You miss 100 percent of the shots you never take.', 'Timothy Karanja', 'Wayne Gretzky', 'Miscellaneous', 'new Date(2018,3,14)'),

    new Quote(8, 'In order to write about life first you must live it.', 'Juliette Mukami', 'Ernest Hemingway', 'Life','new Date(2018,3,14)'),

    new Quote(9, 'To answer before listening — that is folly and shame.', 'Alexander Gacuhi', 'Bible', 'Religion', 'new Date(2018,3,14)'),

    new Quote(10, 'You will face many defeats in life, but never let yourself be defeated.', 'Andrew Ranja', 'Maya Angelou', 'Miscellaneous','new Date(2018,3,14)')
  ]

    // default object to be changed by form inputs
    
    model = new Quote(1, '', '', '','', 'new Date(2018,3,14)');

    submitted = false;

    onSubmit(){this.submitted = true;}

    // when this button is clicked inputs to be displayed on quotes bar
    newQuote(){

      this.model = new Quote(0, '', '', '', '', 'new Date(2018,3,14)')
    }

    @Output() addQuote=new EventEmitter<Quote>();

    submitQuote(){
      this.addQuote.emit(this.model);

    }

    publishQuote(){

      this.addQuote.emit(this.model);

    }

    showAlert(){
      

    }


    deleteGoal(index){
      if (isDelete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
          
          if(toDelete){
              this.quote.splice(index,1)
          }
      }
  }
   

  



  
  

  ngOnInit() {
  }

}
