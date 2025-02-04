import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgOptimizedImage, ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {
  @Input({required: true})
  peliculas!: any[];
  agregarPelicula() {
    this.peliculas.push({
      nombre: "Toy Story 4",
      fecha: new Date("2023-11-20"),
      precio: "1399.99",
    })
  }
  removerPelicula(pelicula: any) {
    const index = this.peliculas.findIndex((el: any) => el.nombre === pelicula.nombre);
    this.peliculas.splice(index, 1);
  }
}
