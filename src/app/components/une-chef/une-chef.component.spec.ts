import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneChefComponent } from './une-chef.component';

describe('UneChefComponent', () => {
  let component: UneChefComponent;
  let fixture: ComponentFixture<UneChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
