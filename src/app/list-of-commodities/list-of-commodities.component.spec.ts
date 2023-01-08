import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCommoditiesComponent } from './list-of-commodities.component';

describe('ListOfCommoditiesComponent', () => {
  let component: ListOfCommoditiesComponent;
  let fixture: ComponentFixture<ListOfCommoditiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCommoditiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCommoditiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
