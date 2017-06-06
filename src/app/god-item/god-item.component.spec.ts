import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodItemComponent } from './god-item.component';

describe('GodItemComponent', () => {
  let component: GodItemComponent;
  let fixture: ComponentFixture<GodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
