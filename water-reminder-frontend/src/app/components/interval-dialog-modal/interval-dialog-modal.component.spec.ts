import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDialogModalComponent } from './interval-dialog-modal.component';

describe('IntervalDialogModalComponent', () => {
  let component: IntervalDialogModalComponent;
  let fixture: ComponentFixture<IntervalDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervalDialogModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervalDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
