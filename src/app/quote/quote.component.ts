import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    {id:1, name:"First quote", description:"No matter what happens, move on"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
