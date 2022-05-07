import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsViewComponent } from './breeds-view.component';

describe('BreedsViewComponent', () => {
  let component: BreedsViewComponent;
  let fixture: ComponentFixture<BreedsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
