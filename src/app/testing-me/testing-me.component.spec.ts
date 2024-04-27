import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingMeComponent } from './testing-me.component';

describe('TestingMeComponent', () => {
  let component: TestingMeComponent;
  let fixture: ComponentFixture<TestingMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingMeComponent]
    });
    fixture = TestBed.createComponent(TestingMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
