import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '@ccal-apps/core';

@Component({
  selector: 'ccal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$: Observable<User> = new Subject();
}
