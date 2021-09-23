import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtarjetasComponent } from './vtarjetas.component';

describe('VtarjetasComponent', () => {
  let component: VtarjetasComponent;
  let fixture: ComponentFixture<VtarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
