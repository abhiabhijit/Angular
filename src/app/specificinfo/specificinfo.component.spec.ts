import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificinfoComponent } from './specificinfo.component';

describe('SpecificinfoComponent', () => {
  let component: SpecificinfoComponent;
  let fixture: ComponentFixture<SpecificinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
