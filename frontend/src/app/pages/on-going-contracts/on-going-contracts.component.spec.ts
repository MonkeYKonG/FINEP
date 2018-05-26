import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingContractsComponent } from './on-going-contracts.component';

describe('OnGoingContractsComponent', () => {
  let component: OnGoingContractsComponent;
  let fixture: ComponentFixture<OnGoingContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnGoingContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
