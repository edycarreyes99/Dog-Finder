import {Component, Inject, OnInit} from '@angular/core';
import {BreedImagesService} from "../../../../../core/services/breed-images/breed-images.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-breed-images-modal',
  templateUrl: './breed-images-modal.component.html',
  styleUrls: ['./breed-images-modal.component.scss']
})
export class BreedImagesModalComponent implements OnInit {
  // Component variables
  isLoading: boolean = false;
  breedName: string = '';
  images: string[] = [];

  constructor(
    private readonly breedImagesService: BreedImagesService,
    @Inject(MAT_DIALOG_DATA) public breedData: any
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.breedName = this.breedData.isSubBreed ? this.breedData.breedName + ' ' + this.breedData.parentBreedName : this.breedData.breedName;
    this.breedName = this.breedName + ' images';
    await this.breedImagesService.getManyImages(
      !this.breedData.isSubBreed ? this.breedData.breedName : this.breedData.parentBreedName,
      this.breedData.isSubBreed ? this.breedData.breedName : undefined
    )
      .subscribe((response) => {
        this.isLoading = false;
        this.images = response.message;
      }, (error) => {
        this.isLoading = false;
        console.error(error);
      });
  }

}
