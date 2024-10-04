import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { ActivatedRoute } from '@angular/router';
import { Banner } from '../shared/models/banner.model';
import { ProductService } from '../shared/services/product.service';
import { ShoppingMall } from '../shared/models/shoppingMall.model';
import { map, of, take } from 'rxjs';
import { Category } from '../shared/models/category.model';
import { Product } from '../shared/models/product.model';
import { Favorite } from '../shared/models/favorite.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  array = [1, 2, 3, 4];
  banners: Banner[] = []
  shoppingMalls: ShoppingMall[] = []
  favList: Favorite[] = []
  favList$
  categories: Category[] = []
  recommendeds: Product[] = []
  shoppingMallGrid = {
    width: '25%',
    textAlign: 'center'
  }

  categoryGrid = {
    width: '8.8%',
    background: 'linear-gradient(19.04deg, #FF4D00 0%, #F99D20 100%)',
    textAlign: 'center',
    margin: '0px 14px',
    padding: '0px',
    display: 'flex',
    alignItems: 'end'
  }

  recommendedGrid = {
    width: '18%',
    margin: '10px 1%',
    height: '254px',
    padding: '0px',
    background: '#FFFCF9'
  }

  constructor(private readonly homeService: HomeService, private readonly productService: ProductService, private readonly route: ActivatedRoute) {
    this.favList$ = of(this.favList)
  }


  ngOnInit() {
    this.route.data.subscribe(({ recommendeds }) => {
      this.recommendeds = recommendeds
    })

    this.homeService.getBanners().subscribe(data => {
      this.banners = data;
    })

    this.productService.getShoppingMalls().pipe(map(data => data.slice(0, 4))).subscribe(data => {
      this.shoppingMalls = data
    })

    this.productService.getCategories().subscribe(data => {
      this.categories = data
    })

    this.loadFavorites()
  }

  loadFavorites() {
    this.productService.getFavorites().subscribe({
      next: data => {
        this.favList = data
        this.reloadFavoriteInRecommendeds()
      }, error: err => {
        if (err.status == 404) {
          this.favList = []
          console.log("Empty Favorite")
        }
      }
    })
  }

  favoriteProduct(product: Product) {
    this.productService.createFavorite(product).subscribe({
      next: data => {
        this.loadFavorites()
        this.reloadFavoriteInRecommendeds()
      }
    })
  }

  unFavoriteProduct(product: Product) {
    this.productService.deleteFavorite(product.fav_id).subscribe({
      next: data => {
        let i = this.favList.findIndex(fav => fav.id == product.fav_id)
        if (i > -1) {
          this.favList.splice(i, 1)
        }

        product.fav_id = 0
      }
    })
  }

  reloadFavoriteInRecommendeds() {
    this.favList.forEach(fav => {
      if (this.recommendeds && this.recommendeds.length > 0) {
        let obj = this.recommendeds.find(recommended => fav.product_code === recommended.code)
        if (obj) {
          obj.fav_id = fav.id
        }
      }
    })
  }

}
