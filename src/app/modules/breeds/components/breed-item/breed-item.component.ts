import {Component, Input, OnInit} from '@angular/core';
import {Breed} from "../../models/breed";
import {BreedImagesService} from "../../../../core/services/breed-images/breed-images.service";

@Component({
  selector: 'app-breed-item',
  templateUrl: './breed-item.component.html',
  styleUrls: ['./breed-item.component.scss']
})
export class BreedItemComponent implements OnInit {
  // Input Variables
  @Input() breed: Breed | undefined;

  constructor(
    private readonly breedImageService: BreedImagesService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.breedImageService.getSingleImage(this.breed!.name).subscribe((response) => {
      this.breed!.image = response.message;
    }, (error) => {
      console.error('Error fetching image for breed', this.breed?.name, ':', error)
    });
  }

}
