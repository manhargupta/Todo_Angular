import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododisplayComponent } from './tododisplay.component';

describe('TododisplayComponent', () => {
  let component: TododisplayComponent;
  let fixture: ComponentFixture<TododisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
