import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
	lista: Array<Producto> = [];


  constructor() { 

  		this.lista.push(new Producto('Fideos'));
  		this.lista.push(new Producto('Leche'));
  		this.lista.push(new Producto('Arroz'));
  }

  ngOnInit() {
  	console.log(this.lista);
  }

}
