import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKategoriBukuComponent } from './new-kategori-buku.component';

describe('NewKategoriBukuComponent', () => {
  let component: NewKategoriBukuComponent;
  let fixture: ComponentFixture<NewKategoriBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKategoriBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKategoriBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
