import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UpdatesComponent } from './updates/updates.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', pathMatch:'full',component: HomePageComponent },
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: 'menu-component', component: MenuComponent },
  { path: 'gallery-component', component: GalleryComponent },
  { path: 'update-component', component: UpdatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
