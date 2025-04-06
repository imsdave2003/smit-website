import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [FormsModule, CommonModule]
})
export class SkillsComponent {
  skills = [
    { name: 'C', icon: 'fa-brands fa-cuttlefish' },
    { name: 'C++', icon: 'fa-solid fa-code' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'MongoDB', icon: 'fa-solid fa-database' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'MS SQL Server', icon: 'fa-solid fa-server' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'Android Studio', icon: 'fa-brands fa-android' },
    { name: 'GitHub', icon: 'fa-brands fa-github' },
    { name: 'Git', icon: 'fa-brands fa-git' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'Wireshark', icon: 'fa-solid fa-network-wired' },
    { name: 'Metasploit', icon: 'fa-solid fa-shield-alt' },
    { name: 'Kali Linux', icon: 'fa-brands fa-linux' },
    { name: 'Nessus', icon: 'fa-solid fa-shield-virus' },
    { name: 'John the Ripper', icon: 'fa-solid fa-user-secret' },
    { name: 'NMAP', icon: 'fa-solid fa-map' },
    { name: 'SNORT', icon: 'fa-solid fa-cloud' },
    { name: 'Burp Suite', icon: 'fa-solid fa-bug' },
    { name: 'Splunk', icon: 'fa-solid fa-chart-line' },
    { name: 'Aircrack-ng', icon: 'fa-solid fa-wifi' },
    { name: 'Nikto',  icon: 'fa-solid fa-skull-crossbones' }
  ];

  visibleSkills = 5; // Show initial number of skills
  isExpanded = false;

  toggleView() {
    this.isExpanded = !this.isExpanded;
    this.visibleSkills = this.isExpanded ? this.skills.length : 5;
  }
}