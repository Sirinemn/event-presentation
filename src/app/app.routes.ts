import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'speakers', component: SpeakersComponent },
    { path: 'contact', component: ContactComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },
];
