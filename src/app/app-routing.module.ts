import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'HomePage', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: '', pathMatch: 'full', redirectTo: 'HomePage' },
  { path: '**', redirectTo: 'HomePage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
