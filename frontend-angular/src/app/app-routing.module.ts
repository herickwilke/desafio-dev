import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroArquivoComponent } from './containers/public/cadastro-arquivo/cadastro-arquivo.component';
import { HomeComponent } from './containers/public/home/home.component';
import { LojasTransacoesComponent } from './containers/public/lojas-transacoes/lojas-transacoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroArquivoComponent },
  { path: 'lojas', component: LojasTransacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
