import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HongkongPage } from './hongkong.page';

describe('HongkongPage', () => {
  let component: HongkongPage;
  let fixture: ComponentFixture<HongkongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HongkongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
