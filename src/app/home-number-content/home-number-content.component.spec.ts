import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNumberContentComponent } from './home-number-content.component';

describe('HomeNumberContentComponent', () => {
  let component: HomeNumberContentComponent;
  let fixture: ComponentFixture<HomeNumberContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNumberContentComponent]
    });
    fixture = TestBed.createComponent(HomeNumberContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
