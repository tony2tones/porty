import { Component, OnInit } from "@angular/core";
import { ContentService } from "src/app/services/content-service.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  message: string;
  title = "This is my home page homie.";
  content =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ducimus voluptas ratione amet officia sapiente vero, provident eligendi assumenda corporis laborum tenetur quibusdam veritatis dicta ipsam. Repellendus reprehenderit laboriosam repudiandae.";
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.currentMessage.subscribe(
      message => (this.content = message)
    );
  }

  newMessage() {
    this.contentService.changeMessage('new content here dawg');
  }
}
