import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWriterComponent } from './text-writer.component';

describe('TextWriterComponent', () => {
  let component: TextWriterComponent;
  let fixture: ComponentFixture<TextWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
