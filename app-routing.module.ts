import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { CONTACTSComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent},
  { path: 'about-component', component: AboutComponent},
  { path: 'blog-component', component: BlogComponent},
  { path: 'gallery-component', component: GalleryComponent},
  { path: 'two-component', component: TwoComponent},
  { path: 'three-component', component: ThreeComponent},
  { path: 'four-component', component: FourComponent},
  { path: 'contacts-component', component: CONTACTSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
