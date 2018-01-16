import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurgsComponent } from './durgs.component';

describe('DurgsComponent', () => {
  let component: DurgsComponent;
  let fixture: ComponentFixture<DurgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
