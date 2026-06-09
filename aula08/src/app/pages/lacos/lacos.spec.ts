import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lacos } from './lacos';

describe('Lacos', () => {
  let component: Lacos;
  let fixture: ComponentFixture<Lacos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lacos],
    }).compileComponents();

    fixture = TestBed.createComponent(Lacos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
