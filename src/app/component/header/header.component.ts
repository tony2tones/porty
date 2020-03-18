import { Component, Output, OnInit } from "@angular/core";
import { ContentService } from "src/app/services/content-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  content = "this has been clicked";
  isShowing: boolean = false;

  public menuToggleHandler() {
    this.isShowing = !this.isShowing;
    console.log("its been clicked", this.isShowing);
  }
}
