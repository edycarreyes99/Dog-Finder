import {Component, Input, OnInit} from '@angular/core';
import {Breed} from "../../../../breeds/models/breed";
import {BreedImagesService} from "../../../../../core/services/breed-images/breed-images.service";
import {Router} from "@angular/router";

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

  showBreedInfo() {
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
}
