import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoComponent } from './pluto.component';

describe('PlutoComponent', () => {
  let component: PlutoComponent;
  let fixture: ComponentFixture<PlutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
