import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPrint } from './bill-print';

describe('BillPrint', () => {
  let component: BillPrint;
  let fixture: ComponentFixture<BillPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
