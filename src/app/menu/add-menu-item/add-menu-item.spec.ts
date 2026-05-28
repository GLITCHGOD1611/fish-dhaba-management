import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuItem } from './add-menu-item';

describe('AddMenuItem', () => {
  let component: AddMenuItem;
  let fixture: ComponentFixture<AddMenuItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMenuItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMenuItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
