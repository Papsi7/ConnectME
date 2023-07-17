import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewyorkPage } from './newyork.page';

describe('NewyorkPage', () => {
  let component: NewyorkPage;
  let fixture: ComponentFixture<NewyorkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewyorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
