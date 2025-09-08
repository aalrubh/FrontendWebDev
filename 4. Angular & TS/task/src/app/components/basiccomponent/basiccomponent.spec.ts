import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basiccomponent } from './basiccomponent';

describe('Basiccomponent', () => {
  let component: Basiccomponent;
  let fixture: ComponentFixture<Basiccomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Basiccomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Basiccomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
