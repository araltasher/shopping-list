import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedListFooterComponent } from './purchased-list-footer.component';

describe('PurchasedListFooterComponent', () => {
  let component: PurchasedListFooterComponent;
  let fixture: ComponentFixture<PurchasedListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
