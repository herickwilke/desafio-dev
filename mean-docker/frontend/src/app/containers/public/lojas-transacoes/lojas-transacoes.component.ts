import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FinanceiroService } from 'src/services/financeiro.service';

@Component({
  selector: 'app-lojas-transacoes',
  templateUrl: './lojas-transacoes.component.html',
  styleUrls: ['./lojas-transacoes.component.scss'],
})
export class LojasTransacoesComponent implements OnInit {
  dataSource = new MatTableDataSource<Object>();
  dataSourceTotais = new MatTableDataSource<Object>();
  displayedColumns: string[] = [
    'nome_loja',
    'nome_proprietario',
    'cartao',
    'cpf',
    'descricao',
    'natureza',
    'valor',
    'data',
    'hora',
  ];
  displayedColumnsTotais: string[] = [
    'nome_loja',
    'descricao',
    'natureza',
    'valor',
  ];
  @ViewChild('transacoesPaginator') paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginatorTotais!: MatPaginator;

  constructor(private financeiroService: FinanceiroService) {}

  async ngOnInit() {
    (await this.financeiroService.buscaTransacoes()).subscribe((res: any) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });

    (await this.financeiroService.buscaTotais()).subscribe((res: any) => {
      this.dataSourceTotais.data = res;
      this.dataSourceTotais.paginator = this.paginatorTotais;
    });
  }
}
