import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponantComponent } from './item-list-componant.component';

describe('ItemListComponantComponent', () => {
  let component: ItemListComponantComponent;
  let fixture: ComponentFixture<ItemListComponantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListComponantComponent]
    });
    fixture = TestBed.createComponent(ItemListComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
