import { Component } from '@angular/core';
const Posts = [
  {
    id: 1,
    name: "test",
    title: "TEST",
    content: "dnkwanjkdnajkdw",
    photo: "default"
  },
  {
    id: 1,
    name: "test",
    title: "TEST",
    content: "dnkwanjkdnajkdw",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7Hsc9TliEcBsGvylGUF8vABnC_As0w2vGw&usqp=CAU"
  }

];
@Component({
  selector: 'app-comment-prevview',
  templateUrl: './comment-prevview.component.html',
  styleUrls: ['./comment-prevview.component.scss']
})

export class CommentPrevviewComponent {
  posts = Posts
}
