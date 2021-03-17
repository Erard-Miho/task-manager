import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, MenuComponent, PageNotFoundComponent, FullLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FullLayoutComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
