import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form data', () => {
    expect(component.formData).toEqual({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  });

  it('should handle form submission', () => {
    spyOn(console, 'log');
    component.formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message'
    };
    
    component.onSubmit();
    expect(component.isSubmitting).toBeTrue();
    
    setTimeout(() => {
      expect(console.log).toHaveBeenCalledWith('Form submitted:', component.formData);
      expect(component.isSubmitting).toBeFalse();
      expect(component.submitSuccess).toBeTrue();
    }, 1600);
  });
});