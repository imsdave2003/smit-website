import { Component } from '@angular/core';
import { TypeWriiterComponent } from "../type-wriiter/type-wriiter.component";
import { FooterComponent } from "../footer/footer.component";
import AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [TypeWriiterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit() {
    AOS.init({
      duration: 5000, // Animation duration in ms
      easing: 'ease-in-out', // Easing effect
      once: true, // Whether animation should happen only once
      mirror: false // Whether elements should animate out when scrolling past them
    });
  }
}
