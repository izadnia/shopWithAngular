import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSinglePageEditComponent } from './dashboard-single-page-edit.component';

describe('DashboardSinglePageEditComponent', () => {
  let component: DashboardSinglePageEditComponent;
  let fixture: ComponentFixture<DashboardSinglePageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSinglePageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSinglePageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
