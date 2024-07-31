import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsModalComponent } from './utils-modal.component';

describe('UtilsModalComponent', () => {
  let component: UtilsModalComponent;
  let fixture: ComponentFixture<UtilsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
