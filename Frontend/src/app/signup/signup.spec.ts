import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Signup } from './signup';

describe('Signup', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [Signup]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.signupForm.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('ab');
    expect(name.hasError('minlength')).toBeTruthy();

    name.setValue('abc');
    expect(name.errors).toBeNull();
  });

  it('should validate email format', () => {
    const email = component.signupForm.controls['email'];
    email.setValue('invalid');
    expect(email.hasError('email')).toBeTruthy();

    email.setValue('valid@example.com');
    expect(email.errors).toBeNull();
  });

  it('should validate password match', () => {
    component.signupForm.controls['password'].setValue('password123');
    component.signupForm.controls['confirmPassword'].setValue('password123');
    expect(component.signupForm.errors).toBeNull();

    component.signupForm.controls['confirmPassword'].setValue('different');
    expect(component.signupForm.hasError('mismatch')).toBeTruthy();
  });
});