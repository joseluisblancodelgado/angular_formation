import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Fernando';
  nombre2:string = 'jose luis blANco delgado';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  a: number = 0.234;
  salario: number = 1234.5;
  heroe: any = {
    nombre: 'Jose',
    clave: 'Hombre Lobo',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  });
  fecha:Date = new Date();
  video:string = '0Wghd9NnDiQ';
  activar:boolean = true;
}
