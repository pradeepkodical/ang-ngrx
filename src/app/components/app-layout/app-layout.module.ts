import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AppPageComponent } from './app-page/app-page.component';

@NgModule({
  declarations: [
    PageLayoutComponent,
    SideNavComponent,
    TopNavComponent,
    AppPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],

  exports: [PageLayoutComponent, AppPageComponent],
})
export class AppLayoutModule {}
