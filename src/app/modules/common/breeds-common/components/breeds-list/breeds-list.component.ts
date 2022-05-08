import {Component, Input, OnInit} from '@angular/core';
import {BreedsService} from "../../../../breeds/services/breeds.service";
import {Breed} from "../../../../breeds/models/breed";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  // Input Components
  @Input() isSubBreed: boolean = false;
  @Input() parentBreed: string | undefined;
  @Input() subBreed: string | undefined;

  // Component Variables
  breeds: Breed[] = [];

  constructor(
    private readonly breedsService: BreedsService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.getBreeds();
  }

  async buildBreedObjects(breeds: any): Promise<Breed[]> {
    return new Promise<Breed[]>(async (resolve, reject) => {
      const array: any = !this.isSubBreed ? Object.keys(breeds) : breeds;
      await Promise.all(array.map(async (key: string) => {
        const breed: Breed = {
          name: key,
          subBreeds: !this.isSubBreed ? (breeds as Record<string, string[]>)[key] : []
        };
        return breed;
      })).then((mappedBreeds) => {
        resolve(mappedBreeds);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  async getBreeds(): Promise<Breed[]> {
    return new Promise<Breed[]>(async (resolve, rejects) => {
      await this.breedsService.index(this.parentBreed, this.subBreed).subscribe(async (response) => {
        console.log(response);
        await this.buildBreedObjects(response.message).then((mappedBreeds) => {
          this.breeds = mappedBreeds;
          resolve(mappedBreeds);
        }).catch((error) => {
          rejects(error);
        });
      }, (error) => {
        console.error('Error fetching breeds:', error);
        rejects(error);
      });
    });
  }
}
