import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // option tag loop options
  options = [
    {category: 'love'},
    {category: 'life'},
    {category: 'work'},
    {category: 'religious'}
  ];

 

  constructor() {


   }

  ngOnInit() {
  }

}
