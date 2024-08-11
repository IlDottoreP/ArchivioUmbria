import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ArchivioUmbria/CasoPolverina', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
  { path: '', pathMatch: 'full', redirectTo: 'ArchivioUmbria/CasoPolverina' },
  { path: '**', redirectTo: 'ArchivioUmbria/CasoPolverina' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
