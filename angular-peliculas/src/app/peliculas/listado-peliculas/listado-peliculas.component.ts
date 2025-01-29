import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgOptimizedImage],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculas = [
        {
          nombre: "Mufasa: El rey león",
          fecha: new Date("2024-12-20"),
          precio: "1599.99",
          imagen: "https://es.web.img3.acsta.net/c_310_420/img/fa/96/fa96c4c78e2d47db7bc917e5d93b9c49.jpg",
        },
        {
          nombre: "Sonic 3. La película",
          fecha: new Date("2024-12-25"),
          precio: "1800.99",
          imagen: "https://es.web.img2.acsta.net/c_310_420/img/c3/70/c3703dc747fb19cf232978ea08e8e9f4.jpg",
        },
        {
          nombre: "Flow, un mundo que salvar",
          fecha: new Date("2025-01-24"),
          precio: "1700.99",
          imagen: "https://es.web.img3.acsta.net/c_310_420/img/b7/91/b79198ca01f21dea6f0dc6efd0fd7e09.jpeg",
        },
        {
          nombre: "Vaiana 2",
          fecha: new Date("2024-11-29"),
          precio: "1900.99",
          imagen: "https://es.web.img3.acsta.net/c_310_420/img/39/67/39672ba0f45383522e128b457d743bb6.jpg",
        },
        {
          nombre: "Juego de ladrones 2: Pantera",
          fecha: new Date("2025-01-10"),
          precio: "1750.00",
          imagen: "https://es.web.img2.acsta.net/c_310_420/img/03/c9/03c90e248da974c4c1610be6b30851cc.jpg",
        },
        {
          nombre: "Gladiator II",
          fecha: new Date("2024-11-15"),
          precio: "1400.99",
          imagen: "https://es.web.img2.acsta.net/c_310_420/img/93/23/9323a23d3967be8808ac146b4c138de3.jpg",
        },
        {
          nombre: "Sin instrucciones",
          fecha: new Date("2024-12-25"),
          precio: "1800.99",
          imagen: "https://es.web.img3.acsta.net/c_310_420/img/e0/49/e049eaa49afba114edc8f38dc9959e47.jpg",
        },
      ];
    }, 2500);
  }
  title = 'angular-peliculas';
  peliculas!: any[]
}
