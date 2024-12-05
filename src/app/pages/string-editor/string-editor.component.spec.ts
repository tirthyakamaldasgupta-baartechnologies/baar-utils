import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringEditorComponent } from './string-editor.component';

describe('StringEditorComponent', () => {
  let component: StringEditorComponent;
  let fixture: ComponentFixture<StringEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});