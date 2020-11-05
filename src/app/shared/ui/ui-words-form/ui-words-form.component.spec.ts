import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiWordsFormComponent } from './ui-words-form.component';

describe('UiWordsFormComponent', () => {
  let component: UiWordsFormComponent;
  let fixture: ComponentFixture<UiWordsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiWordsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiWordsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
