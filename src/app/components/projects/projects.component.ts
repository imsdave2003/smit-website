import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'GUI-Based Applications (Python)',
      description: 'Need for quick media downloads. Developed a YouTube Video Downloader & Instagram Profile Picture Downloader using Python and Tkinter. Enhanced usability and accessibility, resulting in 100+ downloads and a 20% increase in user.',
      technologies: ['Python', 'Tkinter', 'Notepad', 'Visual Studio', 'Py to Exe'],
      bgStyle: 'rgba(255, 255, 255, 0.1)'
    },
    {
      title: 'Mobile Application Development',
      description: 'Requirement for real-time data synchronization in apps. Developed a live Android application using Android Studio (Java, XML) and integrated an online console for seamless data synchronization. Ensured minimal latency and smooth performance, reducing app crashes by 40% and increasing user adoption.',
      technologies: ['Java', 'Xml', 'MongoDB', 'Android Studio'],
      bgStyle: 'rgba(255, 255, 255, 0.1)'
    },
    {
      title: 'Emotion Detection Through Speech (AI/ML)',
      description: 'AI-driven sentiment analysis solution. Developed a model to detect human emotions from speech using machine learning algorithms. Achieved 85% accuracy, contributing to improved AI-driven sentiment analysis and real-time emotional recognition.',
      technologies: ['Python', 'Notebook', 'Tkinter'],
      bgStyle: 'rgba(255, 255, 255, 0.1)'
    },
    {
      title: 'Augmented Reality & Virtual Reality',
      description: 'Demand for immersive experiences. Created interactive AR/VR projects using Unity Engine. Provided real-time immersive experiences, increasing user engagement by 50% and improving learning outcomes in VR environments.',
      technologies: ['Unity'],
      bgStyle: 'rgba(255, 255, 255, 0.1)'
    }
  ];

  ngAfterViewInit() {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,           // Animations occur only once
      mirror: false         // Disable animation repeat on scroll up
    });
  }

  handleMouseMove(event: MouseEvent, projectTitle: string) {
    const project = this.projects.find(p => p.title === projectTitle);
    if (!project) return;

    const { offsetX, offsetY, currentTarget } = event;
    const { offsetWidth, offsetHeight } = currentTarget as HTMLElement;

    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    project.bgStyle = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.3) 10%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.1) 60%) rgba(135, 80, 247,0.4)`;
  }

  handleMouseLeave(projectTitle: string) {
    const project = this.projects.find(p => p.title === projectTitle);
    if (project) {
      project.bgStyle = 'rgba(255, 255, 255, 0.1)';
    }
  }
}
