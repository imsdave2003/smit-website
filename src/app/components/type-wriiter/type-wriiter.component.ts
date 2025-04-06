import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-type-wriiter',
  imports: [],
  templateUrl: './type-wriiter.component.html',
  styleUrl: './type-wriiter.component.css'
})
export class TypeWriiterComponent implements OnInit {
  @Input() roles: string[] = []; // List of roles
  displayedText: string = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 150;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    const currentRole = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.displayedText = currentRole.substring(0, this.charIndex--);
    } else {
      this.displayedText = currentRole.substring(0, this.charIndex++);
    }

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      setTimeout(() => (this.isDeleting = true), 1000); // Pause before deleting
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length; // Loop through roles
    }

    setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : this.typingSpeed);
  }

}
