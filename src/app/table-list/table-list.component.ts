import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { items } from '../model/product'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();

  showAddModal: boolean = false;
  showDeleteModal: boolean = false;

  productName: string = "";
  productDescription: string = "";
  productValue: any;
  productAvaliable: boolean = true;

  items: items[] = []

  constructor() { }

  ngOnInit(): void {
    // this.items = [
    //   {
    //     ordenacao: 1,
    //     productName: 'banana',
    //     valor: 20,
    //     avaliable: true
    //   }
    // ]
  }

  saveData() {
    this.items.push({
      productName: this.productName,
      valor: this.productValue,
      avaliable: this.productAvaliable,
    });

    this.productName = "";
    this.productDescription = "",
    this.showAddModal = false;
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
