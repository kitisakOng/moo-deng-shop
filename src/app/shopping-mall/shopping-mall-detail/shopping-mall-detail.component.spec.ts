import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingMallDetailComponent } from './shopping-mall-detail.component';

describe('ShoppingMallDetailComponent', () => {
  let component: ShoppingMallDetailComponent;
  let fixture: ComponentFixture<ShoppingMallDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingMallDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingMallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
