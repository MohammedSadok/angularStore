import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootLayaoutComponent } from './root-layaout.component';

describe('RootLayaoutComponent', () => {
  let component: RootLayaoutComponent;
  let fixture: ComponentFixture<RootLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootLayaoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
