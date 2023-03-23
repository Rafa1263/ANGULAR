
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import { DataService } from 'src/app/services/test/data.service';
// Poner en input

@Component({
  selector: 'app-comment-prevview',
  templateUrl: './comment-prevview.component.html',
  styleUrls: ['./comment-prevview.component.scss']
})

export class CommentPrevviewComponent implements OnInit {
  @Input() posts: any

  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private readonly dataService: DataService) {
    this.posts = dataService.posts
  }


  ngOnInit(): void {

  }

  public test(post: any): void {


    this.newItemEvent.emit(post)
  }



}
