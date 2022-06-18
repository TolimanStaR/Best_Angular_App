import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recipe1Component } from './recipe1.component';

describe('Recipe1Component', () => {
  let component: Recipe1Component;
  let fixture: ComponentFixture<Recipe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recipe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});