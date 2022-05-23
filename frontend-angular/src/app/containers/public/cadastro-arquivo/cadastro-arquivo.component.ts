import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../../../services/financeiro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-arquivo',
  templateUrl: './cadastro-arquivo.component.html',
  styleUrls: ['./cadastro-arquivo.component.scss'],
})
export class CadastroArquivoComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  public fileAttr: string = 'Selecione o arquivo';
  public arquivoParaUpload: any;

  selectedFiles?: FileList;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  txtFile: string = '';

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {}

  async selectFile(event: any): Promise<void> {
    this.selectedFiles = event.target.files;
    this.fileAttr = '';
    Array.from(event.target.files).forEach(async (file: any) => {
      this.fileAttr += file.name;
      this.txtFile = await file.text();
    });
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: string | null = this.txtFile;
      if (file) {
        this.uploadService.upload(this.txtFile).subscribe({
          next: (event: any) => {
            console.log('1');
            console.log(event);
            if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
              Swal.fire({
                title: 'Enviado com sucesso',
                html: '<p>O seu arquivo CNAB foi importado com sucesso para a base de dados.</p>',
                icon: 'success',
                showCancelButton: true,
                confirmButtonText: 'Ir para vendas',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: 'Continuar importando',
                cancelButtonAriaLabel: 'Thumbs down',
              });
            }
          },
          error: (err: any) => {
            console.log('2');
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Houve um erro ao enviar o arquivo!';
            }
            this.txtFile = '';
          },
        });
      }
      this.selectedFiles = undefined;
    }
  }

  uploadFileToServer() {
    console.log(this.arquivoParaUpload);
  }
}
