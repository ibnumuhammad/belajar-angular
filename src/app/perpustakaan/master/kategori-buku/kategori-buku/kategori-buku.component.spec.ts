import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriBukuComponent } from './kategori-buku.component';

describe('KategoriBukuComponent', () => {
  let component: KategoriBukuComponent;
  let fixture: ComponentFixture<KategoriBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
