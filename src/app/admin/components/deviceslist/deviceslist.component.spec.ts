import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceslistComponent } from './deviceslist.component';

describe('DeviceslistComponent', () => {
  let component: DeviceslistComponent;
  let fixture: ComponentFixture<DeviceslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
