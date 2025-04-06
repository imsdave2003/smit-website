import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreloaderComponent } from "./components/preloader/preloader.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, PreloaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';
  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Adjust the duration

    
  }
  
}
