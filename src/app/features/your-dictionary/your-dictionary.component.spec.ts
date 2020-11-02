import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDictionaryComponent } from './your-dictionary.component';

describe('YourDictionaryComponent', () => {
  let component: YourDictionaryComponent;
  let fixture: ComponentFixture<YourDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDictionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
