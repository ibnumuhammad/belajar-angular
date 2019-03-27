import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKategoriBukuComponent } from './detail-kategori-buku.component';

describe('DetailKategoriBukuComponent', () => {
  let component: DetailKategoriBukuComponent;
  let fixture: ComponentFixture<DetailKategoriBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKategoriBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKategoriBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
