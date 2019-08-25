import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1, "Nicole", "No matter what happens, move on",new Date(2019, 7, 23)),
    new Quote(2, "Nice", "No matter what happens, move on",new Date(2019, 7, 23)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index){
    if(isDelete){
      let ToBeDeleted = confirm(`Do you want to delete ${this.quotes[index].name}?`)

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
  // likeQuote(isLike, index){
  //   if(isLike){
  //     // quote.upvote +=1;
  //     this.quotes[index].upvote +=1;
  //   }

  // }
  // unlikeQuote(isUnlike, index){
  //   quote.downvote+=1;
  //   this.quotes.push(quote);
  // }
  constructor() { }

  ngOnInit() {
  }

}
