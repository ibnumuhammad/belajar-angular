import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBukuComponent } from './new-buku.component';

describe('NewBukuComponent', () => {
  let component: NewBukuComponent;
  let fixture: ComponentFixture<NewBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
