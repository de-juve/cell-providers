import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellProvidersComponent } from './cell-providers.component';

describe('CellProvidersComponent', () => {
  let component: CellProvidersComponent;
  let fixture: ComponentFixture<CellProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
