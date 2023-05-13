import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'utc-to-local-time-pipe';

  date = new Date(Date.now());

  utc = '2023-05-13T17:23:14Z';
}
