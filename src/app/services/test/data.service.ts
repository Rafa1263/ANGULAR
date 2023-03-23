import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [{
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
  }]

  public get posts() {
    return this.data
  }
  constructor() { }
}
