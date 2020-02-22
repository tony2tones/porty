import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { ContentService } from 'src/app/services/content-service.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit{
  content ="this has been clicked";

  @Output() messageBus = new EventEmitter();

  menuArray = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.currentMessage.subscribe(
      message => (this.content = message)
    );
  }

  // newMessage() {
  //   this.contentService.changeMessage('new content here dawg');
  // }
  clickHandler(i) {
    this.contentService.changeMessage('new content here dawg');

    // this.message = i;
    // this.messageBus.emit(this.message);
  }
}
