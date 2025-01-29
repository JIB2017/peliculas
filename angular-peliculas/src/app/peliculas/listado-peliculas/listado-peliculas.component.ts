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
  peliculas!: any[]
}
