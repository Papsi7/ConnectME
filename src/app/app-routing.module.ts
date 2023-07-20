import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'newyork',
    loadChildren: () => import('./newyork/newyork.module').then( m => m.NewyorkPageModule)
  },
  {
    path: 'paris',
    loadChildren: () => import('./paris/paris.module').then( m => m.ParisPageModule)
  },
  {
    path: 'spain',
    loadChildren: () => import('./spain/spain.module').then( m => m.SpainPageModule)
  },
  {
    path: 'japan',
    loadChildren: () => import('./japan/japan.module').then( m => m.JapanPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'london',
    loadChildren: () => import('./london/london.module').then( m => m.LondonPageModule)
  },
  {
    path: 'australia',
    loadChildren: () => import('./australia/australia.module').then( m => m.AustraliaPageModule)
  },
  {
    path: 'italy',
    loadChildren: () => import('./italy/italy.module').then( m => m.ItalyPageModule)
  },
  {
    path: 'd.c',
    loadChildren: () => import('./d.c/d.c.module').then( m => m.DCPageModule)
  },
  {
    path: 'hongkong',
    loadChildren: () => import('./hongkong/hongkong.module').then( m => m.HongkongPageModule)
  },
  {
    path: 'california',
    loadChildren: () => import('./california/california.module').then( m => m.CaliforniaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
