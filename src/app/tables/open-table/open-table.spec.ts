import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTable } from './open-table';

describe('OpenTable', () => {
  let component: OpenTable;
  let fixture: ComponentFixture<OpenTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
