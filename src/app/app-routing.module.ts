import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DirectorlistComponent } from './directorlist/directorlist.component';
import { DocumentComponent } from './document/document.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {
  path:'home',
component:HomeComponent
 },
 {
  path:'aboutus',
component:AboutusComponent
 },
 {
  path:'commodities',
component:CommoditiesComponent
 },
 {
  path:'document',
component:DocumentComponent
 },
 {
  path:'directorlist',
component:DirectorlistComponent
 },
 {
  path:'event',
component:EventComponent
 },
 {
  path:'gallery',
component:GalleryComponent
 },
 {
  path:'contactus',
component:ContactusComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
