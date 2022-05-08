import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedImagesModalComponent } from './breed-images-modal.component';

describe('BreedImagesModalComponent', () => {
  let component: BreedImagesModalComponent;
  let fixture: ComponentFixture<BreedImagesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedImagesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedImagesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
