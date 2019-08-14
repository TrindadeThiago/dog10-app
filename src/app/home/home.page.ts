import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  detalhes(title, price, image){
    this.router.navigate(['/finalizar-pedido', title, price, image]);
  }

  constructor(private router:Router) {}

  hotdogList:Array<Object> = [
    {
      "title": "Hot Dog Simples",
      "description": "Pão, maionese, salsicha e mostarda",
      "price": "R$ 3,50",
      "image": "assets/hotdog.jpg",
    },
    {
      "title": "Hot Dog Mex",
      "description": "Pão, maionese, Doritos e pasta mexicana",
      "price": "R$ 7,50",
      "image": "assets/hotdog2.jpg",
    },
    {
      "title": "Hot Dog Sanduiche",
      "description": "Pão, maionese, salsicha, catchup, alface, cebola roxa e tomate",
      "price": "R$ 5,50",
      "image": "assets/hotdog3.png",
    }
  ]
}
