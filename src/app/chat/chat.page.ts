import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})
export class ChatPage implements OnInit {
  //El any no es recomendable usarlo, pero como no sabemos que tipos de datos son, vamos a poner any
  chats: any[] = [
    {
      username: "oscar",
      message: "TIDSM",
      date: "04:13",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },
    {
      username: "tANO",
      message: "DNM",
      date: "04:12",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg"
    }
  ]; //Y en mi chat.page.html debo de declarar mi chat de los chats

  constructor() { }

  ngOnInit() {
  }

}
