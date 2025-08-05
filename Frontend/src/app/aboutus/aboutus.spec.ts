// spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aboutus } from './aboutus';
import { CountUpModule } from 'ngx-countup';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Aboutus', () => {
  let component: Aboutus;
  let fixture: ComponentFixture<Aboutus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutus, CountUpModule, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Aboutus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.profileImagePath).toBe('assets/profilepic.jpg');
    expect(component.imageLoaded).toBeFalse();
    expect(component.teamMembers.length).toBe(3);
    expect(component.stats.length).toBe(4);
  });

  it('should load image and update imageLoaded flag', () => {
    component.onImageLoad();
    expect(component.imageLoaded).toBeTrue();
  });

  it('should have countUpOptions configured', () => {
    expect(component.countUpOptions).toEqual({
      duration: 2,
      separator: ',',
      decimal: '.',
      enableScrollSpy: true
    });
  });

  it('should render team members correctly', () => {
    const compiled = fixture.nativeElement;
    const teamItems = compiled.querySelectorAll('.team-list li');
    expect(teamItems.length).toBe(3);
    expect(teamItems[0].textContent).toContain('Dasindu Dinsara');
    expect(teamItems[1].textContent).toContain('Jane Doe');
    expect(teamItems[2].textContent).toContain('John Smith');
  });

  it('should display stats correctly', () => {
    const compiled = fixture.nativeElement;
    const statItems = compiled.querySelectorAll('.stat-item');
    expect(statItems.length).toBe(4);
    expect(statItems[0].querySelector('.stat-label').textContent).toContain('Projects Completed');
    expect(statItems[1].querySelector('.stat-label').textContent).toContain('Happy Clients');
  });
});