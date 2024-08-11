import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutModule } from '../core/layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    LayoutModule,
    FontAwesomeModule
  ]
})
export class FeatureModule { }
