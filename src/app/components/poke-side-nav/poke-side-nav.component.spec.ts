import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSideNavComponent } from './poke-side-nav.component';

describe('PokeSideNavComponent', () => {
  let component: PokeSideNavComponent;
  let fixture: ComponentFixture<PokeSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
