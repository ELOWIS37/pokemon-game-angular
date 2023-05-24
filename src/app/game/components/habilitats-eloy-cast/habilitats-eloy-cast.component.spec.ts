import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatsEloyCastComponent } from './habilitats-eloy-cast.component';

describe('HabilitatsEloyCastComponent', () => {
  let component: HabilitatsEloyCastComponent;
  let fixture: ComponentFixture<HabilitatsEloyCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitatsEloyCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitatsEloyCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
