import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    phone: '',
    subject: ''
  };

  isSending: boolean = false;

  constructor() {
    emailjs.init("FNb7IycFwAhIf-VyY"); // Initialize EmailJS
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message || !this.formData.phone || !this.formData.subject) {
      alert('Please fill in all required fields.');
      return;
      this.resetForm()
    }

    this.isSending = true;

    const templateParams = {
      from_name: this.formData.name,
      to_name: "Smit Dave",
      email: this.formData.email,
      phone: this.formData.phone,
      subject: this.formData.subject,
      message: this.formData.message,
      reply_to: this.formData.email
    };

    emailjs
      .send(
        "service_1shdzoi", 
        "template_w8c23dk", 
        templateParams,
        "FNb7IycFwAhIf-VyY"
      )
      .then(response => {
        console.log("✅ Email sent successfully!", response);
        alert("Thank you for your message. I will get back to you soon!");
        this.resetForm();
      })
      .catch(error => {
        console.error("❌ Error sending email:", error);
        alert("Sorry, something went wrong. Please try again later.");
      })
      .finally(() => {
        this.isSending = false;
      });
  }

  resetForm(): void {
    this.formData = { 
      name: '',
      email: '',
      message: '',
      phone: '',
      subject: ''
    };
  }
}
