import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherListComponent } from './washer-list.component';

describe('WasherListComponent', () => {
  let component: WasherListComponent;
  let fixture: ComponentFixture<WasherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
