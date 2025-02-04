import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit{

  chats: any[] = [
  {
    username: "Oscar",
    message: "Profesor, ya terminamos la tarea",
    date: "3:52",
    avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
  },
  {
    username: "Jhonatan",
    message: "Maestro, ya llegamos al salón",
    date: "4:12",
    avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
  }
    
  ]

  constructor() {}

  ngOnInit() {
      
  }

}
