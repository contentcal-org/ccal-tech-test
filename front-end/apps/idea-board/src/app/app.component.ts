import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState, User } from '@ccal-apps/core';
import { Select } from '@ngxs/store';

@Component({
  selector: 'ccal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AuthState)
  user$: Observable<User>;
}
