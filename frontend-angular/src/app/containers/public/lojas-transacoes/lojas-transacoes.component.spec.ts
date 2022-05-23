import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasTransacoesComponent } from './lojas-transacoes.component';

describe('LojasTransacoesComponent', () => {
  let component: LojasTransacoesComponent;
  let fixture: ComponentFixture<LojasTransacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasTransacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasTransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
