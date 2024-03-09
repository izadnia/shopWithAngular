import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostProductComponent } from './dashboard-post-product.component';

describe('DashboardPostProductComponent', () => {
  let component: DashboardPostProductComponent;
  let fixture: ComponentFixture<DashboardPostProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPostProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPostProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
