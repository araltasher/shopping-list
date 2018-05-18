import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedListItemComponent } from './purchased-list-item.component';

describe('PurchasedListItemComponent', () => {
  let component: PurchasedListItemComponent;
  let fixture: ComponentFixture<PurchasedListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
