import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { items } from '../model/product'

/**
 *  Sorts a HTML Table
 * @param {HTMLTableElement} table
 * @param {number} column
 * @param {boolean} asc
 */

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

  sortedColumn: keyof items = 'productName'
  sortDirection: string = 'asc'

  items: items[] = [
    {
      productName: 'abacaxi',
      productValue: 10,
      avaliable: false
    },
    {
      productName: 'mamao',
      productValue: 15,
      avaliable: false
    },
    {
      productName: 'uva',
      productValue: 30,
      avaliable: false
    },
    {
      productName: 'laranja',
      productValue: 40,
      avaliable: false
    },
    {
      productName: 'wiki',
      productValue: 70,
      avaliable: false
    },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  sort(column: keyof items) {
    if (column === this.sortedColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc'
    }

    this.items.sort((a, b) => {
     const valueA: any = a[column]
      const valueB: any = b[column];

      if (this.sortDirection === 'asc') {
        return valueA > valueB ? 1 : -1
      } else {
        return valueA < valueB ? 1 : -1
      }
    })
  }

  saveData() {
    this.items.push({
      productName: this.productName,
      productValue: this.productValue,
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
