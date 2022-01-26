import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMutualComponent } from './explore-mutual.component';

describe('ExploreMutualComponent', () => {
  let component: ExploreMutualComponent;
  let fixture: ComponentFixture<ExploreMutualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMutualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMutualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
