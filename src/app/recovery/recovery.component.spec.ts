import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryComponent } from './recovery.component';

describe('BackupFutureComponent', () => {
  let component: RecoveryComponent;
  let fixture: ComponentFixture<RecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoveryComponent],
    });
    fixture = TestBed.createComponent(RecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
