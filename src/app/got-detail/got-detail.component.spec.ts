import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotDetailComponent } from './got-detail.component';

describe('GotDetailComponent', () => {
  let component: GotDetailComponent;
  let fixture: ComponentFixture<GotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
