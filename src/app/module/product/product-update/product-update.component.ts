import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {};

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.product = this.productService.findById(id);
      this.productForm.setValue(this.product);
    });
  }

  update() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.update(product.id, product);
    this.productForm.reset();
  }

}
