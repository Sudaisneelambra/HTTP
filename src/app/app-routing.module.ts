import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteceptorComponent } from './inteceptor/inteceptor.component';

const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'lazy-feature', loadChildren: () => import('./lazy-feature/lazy-feature.module').then(m => m.LazyFeatureModule) },
{path:'intercepter',component:InteceptorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
