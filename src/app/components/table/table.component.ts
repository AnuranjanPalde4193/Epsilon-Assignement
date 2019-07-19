import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  productList: any;
  sortParam: string;
  sortOrder: boolean;
  sortConfig: any;
  subscription: any;
  constructor(private dataService: DataService) {
    this.productList = [];
    this.sortParam = 'name';
    this.sortOrder = false;
    this.subscription = [];
    this.sortConfig = {
      name: {
        sortOrder: false,
        isActive: true
      },
      price: {
        sortOrder: true,
        isActive: false
      },
      category: {
        sortOrder: true,
        isActive: false
      }
    };


  }

  ngOnInit() {
    this.subscription.push(this.dataService.fetchInfo().subscribe(data => {
      this.productList = data;
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach(obserble => {
      obserble.unsubscribe();
    });
  }

  sortList(name) {
    this.sortConfig[name].isActive = true;
    this.sortParam = name;
    this.sortOrder = !this.sortOrder;
    this.sortConfig[name].sortOrder = this.sortOrder;
  }

}
