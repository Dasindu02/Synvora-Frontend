import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Applicationhome } from './applicationhome';

describe('Applicationhome', () => {
  let component: Applicationhome;
  let fixture: ComponentFixture<Applicationhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Applicationhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Applicationhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
