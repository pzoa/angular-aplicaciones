import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {

  @Input('producto') data: Producto;

  constructor() { }

  ngOnInit() {
  }

}
