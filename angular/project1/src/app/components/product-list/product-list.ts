import { Component } from '@angular/core';
import productData from './product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { CharOnly } from '../../custom-directives/char-only';
import { Highlight } from '../../custom-directives/highlight';
import { Zoomin } from '../../custom-directives/zoomin';
import { Alphanumeric } from '../../custom-directives/alphanumeric';
@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxPaginationModule,
    // CharOnly,
    Highlight,
    Zoomin,
    Alphanumeric
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;
  faStarHalf = faStarHalf;
  starArr = [1, 2, 3, 4, 5];
  p = 1; // current page

  getStarType(rating: number, index: number) {
    const exactrating = rating; // 4.1
    const fullRating = Math.floor(rating); // 4
    if (index <= fullRating) {
      return faStarSolid;
    } else if (index == fullRating + 1) {
      return faStarHalf;
    } else {
      return faStarRegular;
    }
  }

  openAlert() {
    Swal.fire('Page Saved', 'Your page saved succesfully!!!', 'success')
  }
  openSnackBar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
