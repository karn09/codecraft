import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFooComponent } from './bar-foo.component';

describe('BarFooComponent', () => {
  let component: BarFooComponent;
  let fixture: ComponentFixture<BarFooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarFooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
