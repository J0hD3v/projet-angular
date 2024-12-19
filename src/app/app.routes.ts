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
  { path: 'app-tp-directives', loadComponent: () => import('./tp/tp-directives/tp-directives.component').then(m => m.TpDirectivesComponent) },
  { path: 'app-blog-control-center', loadComponent: () => import('./blog-control-center/blog-control-center.component').then(m => m.BlogControlCenterComponent) },
  { path: 'app-pokemons-list', loadComponent: () => import('./pokemons-list/pokemons-list.component').then(m => m.PokemonsListComponent) },
  { path: 'app-profiles-manager', loadComponent: () => import('./profiles-manager/profiles-manager.component').then(m => m.ProfilesManagerComponent) },
  { path: 'app-profile-details/:id', loadComponent: () => import('./profiles-manager/profil-details/profil-details.component').then(m => m.ProfilDetailsComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];