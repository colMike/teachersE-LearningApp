import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajaribuComponent } from './majaribu.component';

describe('MajaribuComponent', () => {
  let component: MajaribuComponent;
  let fixture: ComponentFixture<MajaribuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajaribuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajaribuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
