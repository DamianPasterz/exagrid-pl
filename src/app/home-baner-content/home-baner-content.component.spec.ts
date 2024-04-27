import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBanerContentComponent } from './home-baner-content.component';

describe('HomeBanerContentComponent', () => {
  let component: HomeBanerContentComponent;
  let fixture: ComponentFixture<HomeBanerContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBanerContentComponent]
    });
    fixture = TestBed.createComponent(HomeBanerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
