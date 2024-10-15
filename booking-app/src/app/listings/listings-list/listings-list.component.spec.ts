import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsListComponent } from './listings-list.component';

describe('ListingsListComponent', () => {
  let component: ListingsListComponent;
  let fixture: ComponentFixture<ListingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingsListComponent]
    });
    fixture = TestBed.createComponent(ListingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
