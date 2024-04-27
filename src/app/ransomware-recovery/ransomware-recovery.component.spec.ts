import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RansomwareRecoveryComponent } from './ransomware-recovery.component';

describe('RansomwareRecoveryComponent', () => {
  let component: RansomwareRecoveryComponent;
  let fixture: ComponentFixture<RansomwareRecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RansomwareRecoveryComponent]
    });
    fixture = TestBed.createComponent(RansomwareRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
