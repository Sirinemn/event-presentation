import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup; 
  formSubmitted = false; 
  constructor(private fb: FormBuilder) { 
    this.contactForm = this.fb.group({ 
       name: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]], 
       message: ['', [Validators.required, Validators.minLength(10)]] 
      });
  } 
  onSubmit() { 
    if (this.contactForm.valid) { 
      this.formSubmitted = true; 
      setTimeout(() => this.formSubmitted = false, 3000);
       } 
  }
}
