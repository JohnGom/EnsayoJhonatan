import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteModuloComponent } from './componente-modulo.component';

describe('ComponenteModuloComponent', () => {
  let component: ComponenteModuloComponent;
  let fixture: ComponentFixture<ComponenteModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
