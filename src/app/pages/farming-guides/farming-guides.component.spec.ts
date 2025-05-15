import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingGuidesComponent } from './farming-guides.component';

describe('FarmingGuidesComponent', () => {
  let component: FarmingGuidesComponent;
  let fixture: ComponentFixture<FarmingGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmingGuidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmingGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
