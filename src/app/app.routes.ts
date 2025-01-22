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
  { path: 'app-lifecycle-exemple', loadComponent: () => import('./lifecycle-exemple/lifecycle-exemple.component').then(m => m.LifecycleExempleComponent) },
  { path: 'app-communication', loadComponent: () => import('./communication/communication.component').then(m => m.CommunicationComponent) },
  { path: 'app-observables', loadComponent: () => import('./observables/observables.component').then(m => m.ObservablesComponent) },
  { path: 'app-obs-aleatoire', loadComponent: () => import('./obs-aleatoire/obs-aleatoire.component').then(m => m.ObsAleatoireComponent) },
  { path: 'app-pipes', loadComponent: () => import('./pipes/pipes.component').then(m => m.PipesComponent) },
  { path: 'app-register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
  { path: 'app-login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'app-pokemon-game', loadComponent: () => import('./pokemon-game/pokemon-game.component').then(m => m.PokemonGameComponent) },
  { path: 'app-user-page', loadComponent: () => import('./user-page/user-page.component').then(m => m.UserPageComponent) },
  { path: 'app-firebase', loadComponent: () => import('./firebase/firebase.component').then(m => m.FirebaseComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];