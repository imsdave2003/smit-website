import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
// import {project}
import { ProjectsComponent } from './components/projects/projects.component';
// import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'',
        component:HomeComponent
        // pathMatch:'full'
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'skills',
        component:SkillsComponent
    },
    {
        path:'experiences',
        component:ExperiencesComponent
    },
    {
        path:'projects',
        component:ProjectsComponent
    }
   
];
