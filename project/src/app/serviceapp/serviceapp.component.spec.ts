import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceappComponent } from './serviceapp.component';

describe('ServiceappComponent', () => {
  let component: ServiceappComponent;
  let fixture: ComponentFixture<ServiceappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
