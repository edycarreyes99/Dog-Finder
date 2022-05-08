import {Component, Input, OnInit} from '@angular/core';
import {Breed} from "../../../../breeds/models/breed";
import {BreedImagesService} from "../../../../../core/services/breed-images/breed-images.service";
import {Router} from "@angular/router";
import {
  EXISTS_FAVORITE_BREED_LS, FAVORITE_BREED_IMAGE_LS, FAVORITE_BREED_LS,
  FAVORITE_PARENT_BREED_LS
} from "../../../../../core/constants/local-storage.constants";

@Component({
  selector: 'app-breed-item',
  templateUrl: './breed-item.component.html',
  styleUrls: ['./breed-item.component.scss']
})
export class BreedItemComponent implements OnInit {
  // Input Variables
  @Input() breed: Breed | undefined;
  @Input() isSubBreed: boolean = false;
  @Input() parentBreed: string | undefined;

  constructor(
    private readonly breedImageService: BreedImagesService,
    private router: Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.breedImageService.getSingleImage(this.isSubBreed ? this.parentBreed! : this.breed!.name, this.isSubBreed ? this.breed!.name : undefined).subscribe((response) => {
      this.breed!.image = response.message;
    }, (error) => {
      console.error('Error fetching image for breed', this.breed?.name, ':', error)
    });
  }

  showBreedInfo(): void {
    if (this.breed?.subBreeds?.length) {
      this.router.navigate([`${this.breed.name}`], {
        state: {
          subBreedsQty: this.breed?.subBreeds?.length,
          avatar: this.breed?.image,
          parentBreed: this.breed?.name
        }
      });
    }
  }

  getBreedImage(): string {
    return `${this.breed?.image}`;
  }

  toggleFavoriteBreed() {
    localStorage.clear();
    setTimeout(() => {
      localStorage.setItem(EXISTS_FAVORITE_BREED_LS, 'true');
      if (this.isSubBreed) {
        localStorage.setItem(FAVORITE_PARENT_BREED_LS, `${this.parentBreed}`);
      } else {
        localStorage.removeItem(FAVORITE_PARENT_BREED_LS);
      }
      localStorage.setItem(FAVORITE_BREED_LS, `${this.breed?.name}`);
      localStorage.setItem(FAVORITE_BREED_IMAGE_LS, `${this.breed?.image}`);
    }, 200)
  }
}
