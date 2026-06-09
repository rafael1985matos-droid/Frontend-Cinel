import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeDados } from './tipo-de-dados';

describe('TipoDeDados', () => {
  let component: TipoDeDados;
  let fixture: ComponentFixture<TipoDeDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoDeDados],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoDeDados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
