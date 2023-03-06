import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandirDetencionComponent } from './expandir-detencion.component';

describe('ExpandirDetencionComponent', () => {
  let component: ExpandirDetencionComponent;
  let fixture: ComponentFixture<ExpandirDetencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandirDetencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandirDetencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
