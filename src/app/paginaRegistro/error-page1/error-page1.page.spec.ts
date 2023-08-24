import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPage1Page } from './error-page1.page';

describe('ErrorPage1Page', () => {
  let component: ErrorPage1Page;
  let fixture: ComponentFixture<ErrorPage1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ErrorPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
