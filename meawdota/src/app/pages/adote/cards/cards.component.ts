import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  zonas = new FormControl();
  listaZonas: string[] = ['Zona Sul', 'Zona Norte', 'Zona Leste', 'Zona Centro-Oeste', 'Zona Centro-Sul'];

}