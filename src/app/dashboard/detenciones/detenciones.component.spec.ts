import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetencionesComponent } from './detenciones.component';

describe('DetencionesComponent', () => {
  let component: DetencionesComponent;
  let fixture: ComponentFixture<DetencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
