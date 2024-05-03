import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalletasComponent } from './galletas.component';

describe('GalletasComponent', () => {
  let component: GalletasComponent;
  let fixture: ComponentFixture<GalletasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GalletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
