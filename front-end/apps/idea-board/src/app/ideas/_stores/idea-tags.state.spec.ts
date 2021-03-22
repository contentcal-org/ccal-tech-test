import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdeaTagsState } from './idea-tags.state';

describe('IdeaTagsState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([IdeaTagsState])],
    });

    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });
});
