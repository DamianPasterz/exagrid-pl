import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupFutureComponent } from './backup-future.component';

describe('BackupFutureComponent', () => {
  let component: BackupFutureComponent;
  let fixture: ComponentFixture<BackupFutureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackupFutureComponent]
    });
    fixture = TestBed.createComponent(BackupFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
