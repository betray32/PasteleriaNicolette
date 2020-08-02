import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmporioComponent } from './emporio.component';

describe('EmporioComponent', () => {
  let component: EmporioComponent;
  let fixture: ComponentFixture<EmporioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmporioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmporioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
