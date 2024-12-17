import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'app-component-manip',component: ComponentManipComponent},
  // Test en mode lazy loading
  { path: 'app-component-manip', loadComponent: () => import('./tp/component-manip/component-manip.component').then(m => m.ComponentManipComponent) },
  { path: 'app-list-friends', loadComponent: () => import('./tp/list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
  { path: 'app-tp-data-binding', loadComponent: () => import('./tp/tp-data-binding/tp-data-binding.component').then(m => m.TPDataBindingComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];