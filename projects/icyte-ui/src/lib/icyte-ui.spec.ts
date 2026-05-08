import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcyteUi } from './icyte-ui';

describe('IcyteUi', () => {
  let component: IcyteUi;
  let fixture: ComponentFixture<IcyteUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcyteUi],
    }).compileComponents();

    fixture = TestBed.createComponent(IcyteUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
