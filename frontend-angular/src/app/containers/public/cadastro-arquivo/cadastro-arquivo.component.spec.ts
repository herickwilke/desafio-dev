import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroArquivoComponent } from './cadastro-arquivo.component';

describe('CadastroArquivoComponent', () => {
  let component: CadastroArquivoComponent;
  let fixture: ComponentFixture<CadastroArquivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroArquivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
