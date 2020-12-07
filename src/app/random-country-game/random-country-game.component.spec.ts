import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCountryGameComponent } from './random-country-game.component';

describe('RandomCountryGameComponent', () => {
  let component: RandomCountryGameComponent;
  let fixture: ComponentFixture<RandomCountryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCountryGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCountryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
