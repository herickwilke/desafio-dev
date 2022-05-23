import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FinanceiroService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  // Envia o arquivo CNAB
  upload(file: string): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', `${this.baseUrl}/processar-arquivo`, {
      file: file,
    });
    return this.http.request(req);
  }

  // Busca as transações
  async buscaTransacoes() {
    return await this.http.get(`${this.baseUrl}/listar-transacoes`);
  }
}
