import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete= new EventEmitter<boolean>();
  // @Output() isLike= new EventEmitter<boolean>();
  // @Output() isUnlike= new EventEmitter<boolean>();

  quoteDelete(toDelete:boolean){
    this.isDelete.emit(toDelete);
  }

  numberOfLikes=0;
  numberOfDislikes=0;


  quoteLike(){
    this.numberOfLikes++;
  }
  quoteUnlike(){
    this.numberOfDislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
