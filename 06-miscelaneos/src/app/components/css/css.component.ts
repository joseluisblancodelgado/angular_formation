import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <p>
  Hola mundo....esto es una etiqueta
  </p>
  `,
  styles: [`
    p{
      color: red;
      font-size:20px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
