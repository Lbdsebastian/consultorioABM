import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDComponent } from './agregar-d.component';

describe('AgregarDComponent', () => {
  let component: AgregarDComponent;
  let fixture: ComponentFixture<AgregarDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
