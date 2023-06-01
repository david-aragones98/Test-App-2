import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiPage1Page } from './api-page1.page';

describe('ApiPage1Page', () => {
  let component: ApiPage1Page;
  let fixture: ComponentFixture<ApiPage1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApiPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
