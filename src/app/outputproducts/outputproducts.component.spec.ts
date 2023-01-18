import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputproductsComponent } from './outputproducts.component';

describe('OutputproductsComponent', () => {
  let component: OutputproductsComponent;
  let fixture: ComponentFixture<OutputproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
