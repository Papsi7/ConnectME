import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaliforniaPage } from './california.page';

describe('CaliforniaPage', () => {
  let component: CaliforniaPage;
  let fixture: ComponentFixture<CaliforniaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaliforniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
