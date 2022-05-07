import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBreedComponent } from './favorite-breed.component';

describe('FavoriteBreedComponent', () => {
  let component: FavoriteBreedComponent;
  let fixture: ComponentFixture<FavoriteBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteBreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
