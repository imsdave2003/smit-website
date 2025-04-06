import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isNavbarOpen = false;

    toggleNavbar(): void {
        this.isNavbarOpen = !this.isNavbarOpen;
    }

    closeNavbar(): void {
        this.isNavbarOpen = false;
    }
}
