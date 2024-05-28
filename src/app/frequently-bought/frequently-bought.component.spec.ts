import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyBoughtComponent } from './frequently-bought.component';

describe('FrequentlyBoughtComponent', () => {
  let component: FrequentlyBoughtComponent;
  let fixture: ComponentFixture<FrequentlyBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentlyBoughtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrequentlyBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
