import {Component, Input, OnInit} from '@angular/core';
import {Breed} from "../../models/breed";

@Component({
  selector: 'app-breed-item',
  templateUrl: './breed-item.component.html',
  styleUrls: ['./breed-item.component.scss']
})
export class BreedItemComponent implements OnInit {
  // Input Variables
  @Input() breed: Breed | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Breed passed is:', this.breed)
  }

}
