import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { LeftCompnent } from './home-page/left/left.component';
import { RightCompnent } from './home-page/right/right.component';
import { LayoutModule } from '../core/layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomePageComponent,
    LeftCompnent,
    RightCompnent
  ],
  exports: [
    HomePageComponent,
    LeftCompnent,
    RightCompnent
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
