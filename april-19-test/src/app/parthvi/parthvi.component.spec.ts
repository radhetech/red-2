import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParthviComponent } from './parthvi.component';

describe('ParthviComponent', () => {
  let component: ParthviComponent;
  let fixture: ComponentFixture<ParthviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParthviComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParthviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
