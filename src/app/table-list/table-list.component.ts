import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { items } from '../model/product';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  showAddModal: boolean = false;
  showDeleteModal: boolean = false;

  productNameModal: string = '';

  productName: string = '';
  productDescription: string = '';
  productValue: any;
  productAvaliable: boolean = false;

  sortedColumn: keyof items = 'productName';
  sortDirection: string = 'asc';

  items: items[] = [];

  constructor() {}

  ngOnInit(): void {}

  //order table by name and value

  sort(column: keyof items) {
    if (column === this.sortedColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.items.sort((a, b) => {
      const valueA: any = a[column];
      const valueB: any = b[column];

      if (this.sortDirection === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  }

  saveData() {
    this.items.push({
      productName: this.productName,
      productValue: this.productValue,
      avaliable: this.productAvaliable,
    });

    this.productName = '';
    (this.productDescription = ''), (this.showAddModal = false);
  }

  openModal() {
    this.showAddModal = true;
    this.productValue = null;
  }

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.close.emit(false);
    this.showDeleteModal = false;
  }

  closeModal() {
    this.close.emit(false);
    this.showAddModal = false;
  }

  deleteItem() {
    this.items = [];
    this.showDeleteModal = false;
  }

  disableSaveBtn() {
    if (
      this.productName !== this.productName &&
      this.productDescription !== this.productDescription &&
      this.productValue !== this.productValue
    ) {
      return false;
    } else {
      return true;
    }
  }
}
