import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WovenGridComponent } from './woven-grid.component';

describe('WovenGridComponent', () => {
  let component: WovenGridComponent;
  let fixture: ComponentFixture<WovenGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WovenGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WovenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
