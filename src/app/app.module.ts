import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentComponent } from "./component/component.component";
import { HeaderComponent } from "./component/header/header.component";
import { ContentComponent } from "./component/content/content.component";
import { ContentService } from "./services/content-service.service";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/content/home/home.component';
import { AboutMeComponent } from './component/content/about-me/about-me.component';
import { ContactComponent } from './content/contact/contact.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutMeComponent },
  {path: 'contact', component: ContactComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    AboutMeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
