import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentComponent } from "./component/component.component";
import { HeaderComponent } from "./component/header/header.component";
import { ContentComponent } from "./component/content/content.component";
import { ContentService } from "./services/content-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
