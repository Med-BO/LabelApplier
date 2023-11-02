import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelApplierComponent } from './label-applier.component';

describe('LabelApplierComponent', () => {
  let component: LabelApplierComponent;
  let fixture: ComponentFixture<LabelApplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelApplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelApplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
