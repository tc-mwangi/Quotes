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
      'Life',
      'Love',
      'Work',
      'Religion',
      'Famous',
      'Miscellaneous'
  
    ];

    // default object to be changed by form inputs
    
    model = new Quote(1, 'Get busy living or get busy dying.', 'Stephen King', 'Kelly Morgan','option', 'new Date(2018,3,14)');

    // hide and show
    submitted = false;

    onSubmit() {this.submitted = true;}

    // Add new quotes
    newQuote(){

      this.model = new Quote(7, '', '', '', '', 'new Date(2018,3,14)')
    }




    // @Output() addQuote=new EventEmitter<Quote>();

    // submitQuote(){
    //   this.addQuote.emit(this.model);

    // }

   

    

    // when this button is clicked inputs to be displayed on quotes bar

    


    // publishQuote(){

    //   this.addQuote.emit(this.model);

    // }

    // showAlert(){
      

    // }


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




