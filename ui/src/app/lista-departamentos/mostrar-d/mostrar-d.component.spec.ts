import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDComponent } from './mostrar-d.component';

describe('MostrarDComponent', () => {
  let component: MostrarDComponent;
  let fixture: ComponentFixture<MostrarDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
