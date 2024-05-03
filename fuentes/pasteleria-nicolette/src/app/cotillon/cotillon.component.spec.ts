import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CotillonComponent } from './cotillon.component';

describe('CotillonComponent', () => {
  let component: CotillonComponent;
  let fixture: ComponentFixture<CotillonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CotillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
