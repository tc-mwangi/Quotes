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



  

    // default object to be changed by form inputs
    
    model = new Quote(1, '', '', '','', 'new Date(2018,3,14)');


    @Output() addQuote=new EventEmitter<Quote>();

    submitQuote(){
      this.addQuote.emit(this.model);

    }

    submitted = false;

    onSubmit(){this.submitted = true;}

    // when this button is clicked inputs to be displayed on quotes bar
    newQuote(){

      this.model = new Quote(0, '', '', '', '', 'new Date(2018,3,14)')
    }
    


    publishQuote(){

      this.addQuote.emit(this.model);

    }

    showAlert(){
      

    }


  //   deleteGoal(index){
  //     if (isDelete){
  //         let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
          
  //         if(toDelete){
  //             this.quote.splice(index,1)
  //         }
  //     }
  // }
   

  



  
  

  ngOnInit() {
  }

}
