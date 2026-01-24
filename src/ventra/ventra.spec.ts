import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventra } from './ventra';

describe('Ventra', () => {
  let component: Ventra;
  let fixture: ComponentFixture<Ventra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ventra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ventra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
