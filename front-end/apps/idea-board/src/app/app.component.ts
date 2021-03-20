import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../../../../libs/core/src';

@Component({
  selector: 'ccal-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user$: Observable<User> = new Subject();
}
