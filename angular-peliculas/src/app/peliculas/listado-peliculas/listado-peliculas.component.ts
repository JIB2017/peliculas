import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgOptimizedImage],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Input({required: true})
  peliculas!: any[];
  agregarPelicula() {
    this.peliculas.push({
      nombre: "Toy Story 4",
        fecha: new Date("2023-11-20"),
        precio: "1399.99",
        // imagen: "https://es.web.img3.acsta.net/c_310_420/img/fa/96/fa96c4c78e2d47db7bc917e5d93b9c49.jpg",
    })
  }
}
