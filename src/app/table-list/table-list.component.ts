import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

interface items{
  ordenacao: number,
  name?: string,
  valor: number,
  avaliable?: string
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();

  showAddModal: boolean = false;
  showDeleteModal: boolean = false;

  items: items[] = [
    {
    ordenacao:1,
    name: 'Banana',
    valor: 40,
    avaliable: 'sim'
    },

    {
    ordenacao:2,
    name: 'Abacaxi',
    valor: 10,
    avaliable: 'não'
    },

    {
    ordenacao:3,
    name: 'Kiwi',
    valor: 50,
    avaliable: 'não'
    },

    {
    ordenacao:4,
    name: 'Melância',
    valor: 30,
    avaliable: 'sim'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showAddModal = true;
  }

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.close.emit(false);
    this.showDeleteModal = false;
  }

  closeModal() {
    this.close.emit(false)
    this.showAddModal = false;

  }
}
