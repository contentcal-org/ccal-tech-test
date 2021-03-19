import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasListPage } from './ideas-list.page';

describe('IdeasListPage', () => {
  let component: IdeasListPage;
  let fixture: ComponentFixture<IdeasListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdeasListPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
