import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailGirlPage } from './detail-girl.page';

describe('DetailGirlPage', () => {
  let component: DetailGirlPage;
  let fixture: ComponentFixture<DetailGirlPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailGirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
