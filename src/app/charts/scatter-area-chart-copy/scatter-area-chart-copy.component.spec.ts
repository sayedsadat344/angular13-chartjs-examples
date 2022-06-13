import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterAreaChartCopyComponent } from './scatter-area-chart-copy.component';

describe('ScatterAreaChartCopyComponent', () => {
  let component: ScatterAreaChartCopyComponent;
  let fixture: ComponentFixture<ScatterAreaChartCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterAreaChartCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterAreaChartCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
