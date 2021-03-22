import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdeasState } from './ideas.state';

describe('IdeasState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([IdeasState])],
    });

    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
