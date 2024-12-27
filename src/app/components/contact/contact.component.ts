import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { this.contactForm = new FormGroup({ 
    name: new FormControl('', [Validators.required]), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    message: new FormControl('', [Validators.required, Validators.minLength(10)]) 
    }); 
  } 
  onSubmit() { 
    if (this.contactForm.valid) { 
      console.log('Form Submitted!', this.contactForm.value); 
     } 
  }
}
