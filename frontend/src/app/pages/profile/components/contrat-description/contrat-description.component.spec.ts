import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratDescriptionComponent } from './contrat-description.component';

describe('ContratDescriptionComponent', () => {
  let component: ContratDescriptionComponent;
  let fixture: ComponentFixture<ContratDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
