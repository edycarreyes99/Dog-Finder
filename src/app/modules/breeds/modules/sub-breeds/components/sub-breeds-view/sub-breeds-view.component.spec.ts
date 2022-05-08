import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBreedsViewComponent } from './sub-breeds-view.component';

describe('SubBreedsViewComponent', () => {
  let component: SubBreedsViewComponent;
  let fixture: ComponentFixture<SubBreedsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubBreedsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBreedsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
