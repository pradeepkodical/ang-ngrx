import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HomePageComponent } from './home-page.component';
import { AppLayoutModule } from 'src/app/components/app-layout/app-layout.module';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [DashboardComponent, HomePageComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSlideToggleModule,
    AppLayoutModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', homeReducer),
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
