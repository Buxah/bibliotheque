import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreAddExemplaireComponent } from './livre-add-exemplaire.component';

describe('LivreAddExemplaireComponent', () => {
  let component: LivreAddExemplaireComponent;
  let fixture: ComponentFixture<LivreAddExemplaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreAddExemplaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreAddExemplaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
