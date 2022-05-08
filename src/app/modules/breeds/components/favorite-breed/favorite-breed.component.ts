import {Component, OnInit} from '@angular/core';
import {
  FAVORITE_BREED_IMAGE_LS,
  FAVORITE_BREED_LS,
  FAVORITE_PARENT_BREED_LS
} from "../../../../core/constants/local-storage.constants";

@Component({
  selector: 'app-favorite-breed',
  templateUrl: './favorite-breed.component.html',
  styleUrls: ['./favorite-breed.component.scss']
})
export class FavoriteBreedComponent implements OnInit {
  isSubBreed: boolean = false;
  favoriteBreedName: string = '';
  favoriteParentBreedName: string = '';
  favoriteBreedImage: string = '';


  constructor() {
  }

  ngOnInit(): void {
    this.isSubBreed = localStorage.getItem(FAVORITE_PARENT_BREED_LS) !== null;
    this.favoriteBreedName = localStorage.getItem(FAVORITE_BREED_LS) ?? '';
    if(this.isSubBreed){
      this.favoriteParentBreedName = localStorage.getItem(FAVORITE_PARENT_BREED_LS) ?? '';
    }
    this.favoriteBreedImage = localStorage.getItem(FAVORITE_BREED_IMAGE_LS) ?? '';
  }

  toggleFavoriteBreed(): void {
    localStorage.clear();
  }
}
