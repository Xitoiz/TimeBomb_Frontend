import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejoindreComponent } from './rejoindre.component';

describe('RejoindreComponent', () => {
  let component: RejoindreComponent;
  let fixture: ComponentFixture<RejoindreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejoindreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejoindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
