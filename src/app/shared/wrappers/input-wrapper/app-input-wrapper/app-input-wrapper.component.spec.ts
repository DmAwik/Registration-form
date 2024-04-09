import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputWrapperComponent } from './app-input-wrapper.component';

describe('AppInputWrapperComponent', () => {
  let component: AppInputWrapperComponent;
  let fixture: ComponentFixture<AppInputWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppInputWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
