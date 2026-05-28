import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrder } from './table-order';

describe('TableOrder', () => {
  let component: TableOrder;
  let fixture: ComponentFixture<TableOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
