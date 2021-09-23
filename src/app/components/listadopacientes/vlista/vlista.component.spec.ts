import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlistaComponent } from './vlista.component';

describe('VlistaComponent', () => {
  let component: VlistaComponent;
  let fixture: ComponentFixture<VlistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
