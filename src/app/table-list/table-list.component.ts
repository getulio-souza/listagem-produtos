import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { items } from '../model/product'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();

  showAddModal: boolean = false;
  showDeleteModal: boolean = false;

  productNameModal: string = ""

  productName: string = "";
  productDescription: string = "";
  productValue: any;
  productAvaliable: boolean = true;

  items: items[] = []

  constructor() { }

  ngOnInit(): void {
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

  deleteItem() {
    this.items = []
    this.showDeleteModal = false;
  }


  disableSaveBtn() {
    if (this.productName !== this.productName && this.productDescription !== this.productDescription && this.productValue !== this.productValue) {
      return false
    } else {
      return true
    }
  }
}
