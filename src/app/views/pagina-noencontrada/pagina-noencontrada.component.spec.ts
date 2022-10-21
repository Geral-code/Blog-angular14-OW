import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoencontradaComponent } from './pagina-noencontrada.component';

describe('PaginaNoencontradaComponent', () => {
  let component: PaginaNoencontradaComponent;
  let fixture: ComponentFixture<PaginaNoencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNoencontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
