import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  nombre:string = 'GUIO';
  url = 'http://www.google.es';
  tipo = 'radio';
  nombre2 = 'aaaaaaaa';
  

  constructor() { }

  ngOnInit() {
  }

}
