import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import quote class
import { Quote }    from '../quote'; 

@Component({
  selector: 'app-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class FormComponent implements OnInit {

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

    // default object to be changed by form inputs
    
    model = new Quote(1, 'Get busy living or get busy dying.', 'Stephen King', 'Kelly Morgan','Life');

    submitted = false;

    onSubmit(){this.submitted = true;}

    // when this button is clicked inputs to be displayed on quotes bar
    newQuote(){

      this.model = new Quote(0, '', '', '', '')
    }

    @Output() addQuote=new EventEmitter<Quote>();

    submitQuote(){
      this.addQuote.emit(this.model);

    }

    publishQuote(){
      // this.addQuote.emit(this.newQuote);
    }



  
  

  ngOnInit() {
  }

}
