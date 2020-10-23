import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateactorTwoComponent } from './updateactor-two.component';

describe('UpdateactorTwoComponent', () => {
  let component: UpdateactorTwoComponent;
  let fixture: ComponentFixture<UpdateactorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateactorTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateactorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
