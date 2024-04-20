import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManavaminComponent } from './manavamin.component';

describe('ManavaminComponent', () => {
  let component: ManavaminComponent;
  let fixture: ComponentFixture<ManavaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManavaminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManavaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
