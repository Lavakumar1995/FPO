import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DirectorsListComponent } from './directors-list/directors-list.component';
import { DocumentsComponent } from './documents/documents.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ListOfCommoditiesComponent } from './list-of-commodities/list-of-commodities.component';

const routes: Routes = [
{
path:'home',
component:HomeComponent
},{
  path:'home',
  component:HomeComponent
  },
{
    path:'aboutus',
    component:AboutUsComponent
   },
{
      path:'listofcommodities',
      component:ListOfCommoditiesComponent
   },
{
        path:'documents',
        component:DocumentsComponent
        },
        {
          path:'directorslist',
          component:DirectorsListComponent
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
                component:ContactUsComponent
                }
    
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
