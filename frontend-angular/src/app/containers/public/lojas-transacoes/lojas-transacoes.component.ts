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
  public transacoes: any = [];
  dataSource = new MatTableDataSource<Object>();
  displayedColumns: string[] = [
    'cartao',
    'cpf',
    'descricao',
    'natureza',
    'valor',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private financeiroService: FinanceiroService) {}

  async ngOnInit() {
    (await this.financeiroService.buscaTransacoes()).subscribe((res) => {
      this.transacoes = res;
      this.dataSource.data = this.transacoes;
      this.dataSource.paginator = this.paginator;
    });
  }
}
