import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerComponent } from './burguer.component';

describe('BurguerComponent', () => {
  let component: BurguerComponent;
  let fixture: ComponentFixture<BurguerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurguerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
