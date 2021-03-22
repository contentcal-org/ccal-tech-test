import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State, Action, StateContext, StateToken, Selector } from '@ngxs/store';
import { AuthLogin, AuthLogout } from './auth.actions';
import { User } from '../_models/user.model';

export const ANALYZE_STATE_TOKEN = new StateToken<User>('auth');

@State<User>({
  name: ANALYZE_STATE_TOKEN,
  defaults: null,
})
@Injectable()
export class AuthState {
  constructor(private router: Router) {}

  @Selector([ANALYZE_STATE_TOKEN])
  static isAuthenticated(state: User): boolean {
    return !!state.id;
  }

  @Action(AuthLogin)
  login(ctx: StateContext<User>, action: AuthLogin) {
    ctx.setState({ id: '1', name: 'Mr User', isAdmin: false });
    return this.router.navigate(['/ideas']);
  }

  @Action(AuthLogout)
  logout(ctx: StateContext<User>) {
    ctx.setState(null);
    return this.router.navigate(['/']);
  }
}
