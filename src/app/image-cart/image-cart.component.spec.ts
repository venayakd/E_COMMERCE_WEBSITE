import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCartComponent } from './image-cart.component';

describe('ImageCartComponent', () => {
  let component: ImageCartComponent;
  let fixture: ComponentFixture<ImageCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
