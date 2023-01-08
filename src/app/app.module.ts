import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListOfCommoditiesComponent } from './list-of-commodities/list-of-commodities.component';
import { DocumentsComponent } from './documents/documents.component';
import { DirectorsListComponent } from './directors-list/directors-list.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpperheaderComponent } from './upperheader/upperheader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ListOfCommoditiesComponent,
    DocumentsComponent,
    DirectorsListComponent,
    EventComponent,
    GalleryComponent,
    ContactUsComponent,
    UpperheaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
