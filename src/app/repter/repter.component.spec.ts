import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepterComponent } from './repter.component';

describe('RepterComponent', () => {
  let component: RepterComponent;
  let fixture: ComponentFixture<RepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
