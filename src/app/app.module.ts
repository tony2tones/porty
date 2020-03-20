import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { ContentComponent } from "./component/content/content.component";
import { ContentService } from "./services/content-service.service";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/content/home/home.component';
import { AboutMeComponent } from './component/content/about-me/about-me.component';
import { ContactComponent } from './component/content/contact/contact.component';
import { ParallaxDirective } from './parallax.directive';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'About', component: AboutMeComponent },
  {path: 'Contact', component: ContactComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    ParallaxDirective
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
