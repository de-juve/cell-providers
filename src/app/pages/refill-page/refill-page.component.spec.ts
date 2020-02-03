import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillPageComponent } from './refill-page.component';

describe('RefillPageComponent', () => {
  let component: RefillPageComponent;
  let fixture: ComponentFixture<RefillPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
