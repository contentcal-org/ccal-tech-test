import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasPage } from './ideas.page';

describe('IdeasPage', () => {
  let component: IdeasPage;
  let fixture: ComponentFixture<IdeasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
