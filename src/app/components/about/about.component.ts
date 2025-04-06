import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,       // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true             // Only animate once
    });
  }
}
