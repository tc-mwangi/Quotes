import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  
  numberOfVotes: number = 0;
  downVotes: number = 0;
  upVotes: number = 0;

  
  totalVotes() {
    
  }
  
  upVote(){
    this.upVotes++;
  }
  downVote(){
    this.downVotes++;
    
  }

  constructor() {
    // this.votes = 10;
    
   }

  ngOnInit() {
  }

}
