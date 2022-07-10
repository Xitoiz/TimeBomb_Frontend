import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementsComponent } from './classements.component';

describe('ClassementsComponent', () => {
  let component: ClassementsComponent;
  let fixture: ComponentFixture<ClassementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
