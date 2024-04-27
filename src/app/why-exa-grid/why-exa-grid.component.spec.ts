import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyExaGridComponent } from './why-exa-grid.component';

describe('WhyExaGridComponent', () => {
  let component: WhyExaGridComponent;
  let fixture: ComponentFixture<WhyExaGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyExaGridComponent]
    });
    fixture = TestBed.createComponent(WhyExaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
