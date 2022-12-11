import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent implements OnInit{

  @Input() listaPreno: Booking[] = undefined!;
  constructor() {}

  ngOnInit(): void {
  }

  mostraDett(room : Room)
  {
    console.log(room)
  }

}