import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  message =" have been clicked";

  @Output() messageBus = new EventEmitter();

  menuArray = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];

  clickHandler() {
    this.messageBus.emit(this.message);
  }
}
