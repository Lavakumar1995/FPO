import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { DocumentComponent } from './document/document.component';
import { DirectorlistComponent } from './directorlist/directorlist.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderlogoComponent } from './headerlogo/headerlogo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    CommoditiesComponent,
    DocumentComponent,
    DirectorlistComponent,
    EventComponent,
    GalleryComponent,
    ContactusComponent,
    HeaderlogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
