import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  upload(file: string): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', `${this.baseUrl}/processar-arquivo`, {
      file: file,
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
