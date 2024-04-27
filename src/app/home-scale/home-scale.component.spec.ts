import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScaleComponent } from './home-scale.component';

describe('BackupFutureComponent', () => {
  let component: HomeScaleComponent;
  let fixture: ComponentFixture<HomeScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeScaleComponent],
    });
    fixture = TestBed.createComponent(HomeScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
