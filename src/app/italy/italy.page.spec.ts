import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItalyPage } from './italy.page';

describe('ItalyPage', () => {
  let component: ItalyPage;
  let fixture: ComponentFixture<ItalyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItalyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
