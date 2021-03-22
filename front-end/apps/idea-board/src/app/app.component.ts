import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState, DarkModeState, UseDarkMode, User } from '@ccal-apps/core';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'ccal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Select(AuthState)
  user$: Observable<User>;

  @Select(DarkModeState)
  useDarkMode$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.useDarkMode$.subscribe((useDarkMode) =>
      document
        .querySelector('body')
        .setAttribute('theme', useDarkMode ? 'dark' : 'default')
    );
  }

  changeDarkMode(useDarkMode: boolean): void {
    this.store.dispatch(new UseDarkMode(useDarkMode));
  }
}
