import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BreedImagesService} from "../../../../../../core/services/breed-images/breed-images.service";
import {SubBreedsService} from "../../services/sub-breeds.service";

@Component({
  selector: 'app-sub-breeds-view',
  templateUrl: './sub-breeds-view.component.html',
  styleUrls: ['./sub-breeds-view.component.scss']
})
export class SubBreedsViewComponent implements OnInit {
  // Component Variables
  parentBreed: string = '';
  avatar: string = '';
  subBreedsQty: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly breedsImageService: BreedImagesService,
    private readonly subBreedsService: SubBreedsService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.parentBreed = params['breed'];
      await this.breedsImageService.getSingleImage(this.parentBreed).subscribe(async (response) => {
        this.avatar = response.message;
        await this.subBreedsService.showBreed(this.parentBreed).subscribe(async (response) => {
          this.subBreedsQty = response.message.length;
        }, (error) => {
          console.error('Error fetching breed info:', error);
        });
      }, (error) => {
        console.error('Error fetching image:', error)
      });
    });
  }

}
