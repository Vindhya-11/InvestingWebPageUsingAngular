import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreStockComponent } from './explore-stock.component';

describe('ExploreStockComponent', () => {
  let component: ExploreStockComponent;
  let fixture: ComponentFixture<ExploreStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
