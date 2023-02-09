import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResatuarantpageComponent } from './resatuarantpage.component';

describe('ResatuarantpageComponent', () => {
  let component: ResatuarantpageComponent;
  let fixture: ComponentFixture<ResatuarantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResatuarantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResatuarantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
