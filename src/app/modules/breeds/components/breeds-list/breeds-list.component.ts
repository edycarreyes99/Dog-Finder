import {Component, OnInit} from '@angular/core';
import {BreedsService} from "../../services/breeds.service";

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {

  constructor(
    private readonly breedsService: BreedsService
  ) {
  }

  ngOnInit(): void {
  }

  async getBreeds(): Promise<object> {
    return new Promise<object>(async (resolve, rejects) => {

    });
  }
}
