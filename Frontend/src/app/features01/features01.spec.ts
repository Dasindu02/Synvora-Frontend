import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features01 } from './features01';

describe('Features01', () => {
  let component: Features01;
  let fixture: ComponentFixture<Features01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Features01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Features01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
