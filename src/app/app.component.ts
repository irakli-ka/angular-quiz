import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'lesson68';
  response: any;

  searchFormSubs($event: any) {
    this.response = $event;
  }

}
