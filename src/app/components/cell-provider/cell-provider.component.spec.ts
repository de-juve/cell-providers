import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellProviderComponent } from './cell-provider.component';

describe('CellProviderComponent', () => {
  let component: CellProviderComponent;
  let fixture: ComponentFixture<CellProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
