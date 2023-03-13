import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvigationVarComponent } from './nvigation-var.component';

describe('NvigationVarComponent', () => {
  let component: NvigationVarComponent;
  let fixture: ComponentFixture<NvigationVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvigationVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvigationVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
