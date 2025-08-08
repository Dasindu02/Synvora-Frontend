import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aboutus } from './aboutus';
import { CountUpDirective } from 'ngx-countup'; // Updated import
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Aboutus', () => {
  let component: Aboutus;
  let fixture: ComponentFixture<Aboutus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Aboutus,
        CountUpDirective, // Updated import
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Aboutus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});