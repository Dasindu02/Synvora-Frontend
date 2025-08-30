import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminapprove } from './adminapprove';

describe('Adminapprove', () => {
  let component: Adminapprove;
  let fixture: ComponentFixture<Adminapprove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminapprove]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminapprove);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
