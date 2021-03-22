import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasEditorComponent } from './ideas-editor.component';

describe('IdeasEditorComponent', () => {
  let component: IdeasEditorComponent;
  let fixture: ComponentFixture<IdeasEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
