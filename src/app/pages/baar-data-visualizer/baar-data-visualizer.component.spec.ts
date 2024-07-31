import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaarDataVisualizerComponent } from './baar-data-visualizer.component';

describe('BaarDataVisualizerComponent', () => {
  let component: BaarDataVisualizerComponent;
  let fixture: ComponentFixture<BaarDataVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaarDataVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaarDataVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
