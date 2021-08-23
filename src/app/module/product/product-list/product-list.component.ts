import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];


  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  deleteProduct(id) {
    const r = confirm('Xóa thật không?');
    if (r === true) {
      this.productService.delete(id);
    }
  }
}
