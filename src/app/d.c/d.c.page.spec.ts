import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DCPage } from './d.c.page';

describe('DCPage', () => {
  let component: DCPage;
  let fixture: ComponentFixture<DCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
