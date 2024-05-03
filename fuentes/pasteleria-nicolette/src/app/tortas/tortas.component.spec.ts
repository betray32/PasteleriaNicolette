import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TortasComponent } from './tortas.component';

describe('TortasComponent', () => {
  let component: TortasComponent;
  let fixture: ComponentFixture<TortasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TortasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
