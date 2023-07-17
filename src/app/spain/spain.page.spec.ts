import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpainPage } from './spain.page';

describe('SpainPage', () => {
  let component: SpainPage;
  let fixture: ComponentFixture<SpainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
