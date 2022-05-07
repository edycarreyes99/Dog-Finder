import {Component, OnInit} from '@angular/core';
import {BreedsService} from "../../services/breeds.service";
import {Breed} from "../../models/breed";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  // Component Variables
  breeds: Breed[] = [];

  constructor(
    private readonly breedsService: BreedsService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.getBreeds();
  }

  async buildBreedObjects(breeds: Record<string, string[]>): Promise<Breed[]> {
    return new Promise<Breed[]>(async (resolve, reject) => {
      await Promise.all(Object.keys(breeds).map(async (key) => {
        const breed: Breed = {
          name: key,
          subBreeds: breeds[key]
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
      await this.breedsService.index().subscribe(async (response) => {
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
