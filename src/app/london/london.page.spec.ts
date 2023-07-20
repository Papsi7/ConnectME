import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LondonPage } from './london.page';

describe('LondonPage', () => {
  let component: LondonPage;
  let fixture: ComponentFixture<LondonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LondonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
