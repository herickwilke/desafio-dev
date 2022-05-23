import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroArquivoComponent } from './containers/public/cadastro-arquivo/cadastro-arquivo.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroArquivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
