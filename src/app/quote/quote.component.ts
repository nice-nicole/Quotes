import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1, "No matter what happens, move on", "Denzel Washington","Nicole",new Date(2019, 7, 23)),
    new Quote(2, "L'humilitE prEcEde la gloire","Un sage que je connais pas","Nice",new Date(2019, 7, 23)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index){
    if(isDelete){
      let ToBeDeleted = confirm(`Do you want to delete this quote?`);

      if (ToBeDeleted){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id= quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  preNum:number
  lastNum:number
  counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  quoteLike(index){
      this.quotes[index].upvote+=1;
  }
  quoteUnlike(index){
    this.quotes[index].downvote+=1;
  }
  // delQuote(i){
  //   this.quotes.splice(i, 1)
  // }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
