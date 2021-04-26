import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReComponent } from './nueva-re.component';

describe('NuevaReComponent', () => {
  let component: NuevaReComponent;
  let fixture: ComponentFixture<NuevaReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaReComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
