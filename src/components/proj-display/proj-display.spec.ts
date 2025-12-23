import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDisplay } from './proj-display';

describe('ProjDisplay', () => {
  let component: ProjDisplay;
  let fixture: ComponentFixture<ProjDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
