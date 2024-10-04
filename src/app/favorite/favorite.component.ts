import { Component } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Favorite } from '../shared/models/favorite.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  favList: Favorite[] = []

  constructor(private readonly productService: ProductService) {
  }

  ngOnInit() {
    this.loadFavorites()
  }

  unFavorite(id: number) {
    this.productService.deleteFavorite(id).subscribe({
      next: data => {
        this.loadFavorites()
      }, error: err => {

      }
    })
  }

  loadFavorites() {
    this.productService.getFavorites().subscribe(data => {
      this.favList = data
    }, error => {
      if (error.status == 404) {
        this.favList = []
        console.log("Empty Favorite")
      }
    })
  }
}
