import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinemovieactorComponent } from './combinemovieactor.component';

describe('CombinemovieactorComponent', () => {
  let component: CombinemovieactorComponent;
  let fixture: ComponentFixture<CombinemovieactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinemovieactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinemovieactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
