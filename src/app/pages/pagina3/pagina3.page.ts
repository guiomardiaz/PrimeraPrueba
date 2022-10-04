import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor() { }


  juegos = [
    {
      icono: "diamond-outline",
      nombre: "Pokémon Yellow"

    },
    {
      icono: "happy-outline",
      nombre: "Mega Man X"

    },
    {
      icono: "sparkles-outline",
      nombre: "The Legend of Zelda"

    },
    {
      icono: "game-controller-outline",
      nombre: "Pac-Man"

    },
    {
      icono: "globe-outline",
      nombre: "Super Mario World"

    },
    
  ]

  mostrar = true;

  ngOnInit() {
  }

}
