import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-breeds-view',
  templateUrl: './breeds-view.component.html',
  styleUrls: ['./breeds-view.component.scss']
})
export class BreedsViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  existsFavoriteBreed(): boolean {
    return localStorage.getItem('existsFavoriteBreed') === 'true';
  }
}
