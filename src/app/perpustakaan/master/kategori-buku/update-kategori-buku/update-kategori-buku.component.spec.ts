import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKategoriBukuComponent } from './update-kategori-buku.component';

describe('UpdateKategoriBukuComponent', () => {
  let component: UpdateKategoriBukuComponent;
  let fixture: ComponentFixture<UpdateKategoriBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKategoriBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKategoriBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
