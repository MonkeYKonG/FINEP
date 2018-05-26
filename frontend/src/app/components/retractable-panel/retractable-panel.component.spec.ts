import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetractablePanelComponent } from './retractable-panel.component';

describe('RetractablePanelComponent', () => {
  let component: RetractablePanelComponent;
  let fixture: ComponentFixture<RetractablePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetractablePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetractablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
