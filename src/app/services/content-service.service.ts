import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  private contentSource = new BehaviorSubject<string>("default message");
  currentMessage = this.contentSource.asObservable();
  constructor() {}

  changeMessage(message: string) {
    this.contentSource.next(message);
  }
}
