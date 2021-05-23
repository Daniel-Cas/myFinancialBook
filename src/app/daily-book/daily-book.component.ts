import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Welcome } from '../login/interface/login.interface';
import { HomeService } from '../home/services/home.service';
import { ListaJournal } from '../enterprise/interface/enterprise.interface';
import Swal from 'sweetalert2';
import { DailyBookService } from './services/daily-book.service';

@Component({
  selector: 'app-daily-book',
  templateUrl: './daily-book.component.html',
  styles: [],
})
export class DailyBookComponent {

  @ViewChild('txtConcepto') txtConcepto!: ElementRef<HTMLInputElement>;
  @ViewChild('txtCodigo') txtCodigo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtDescripcion') txtDescripcion!: ElementRef<HTMLInputElement>;
  @ViewChild('txtSaldo') txtSaldo!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPrecio') txtPrecio!: ElementRef<HTMLInputElement>;




  addBook() {
    const codigo = this.txtCodigo.nativeElement.value;
    const concepto = this.txtConcepto.nativeElement.value;
    const descripcion = this.txtDescripcion.nativeElement.value;
    const saldo = this.txtSaldo.nativeElement.value;
    const precio = this.txtPrecio.nativeElement.value;
    if (
      codigo != '' &&
      concepto != '' &&
      descripcion != '' &&
      saldo != '' &&
      precio != ''
    ) {
      this.dailyBookService.postBook(
        codigo,
        concepto,
        descripcion,
        saldo,
        precio
      );
      this.txtCodigo.nativeElement.value = '';
      this.txtConcepto.nativeElement.value = '';
      this.txtDescripcion.nativeElement.value = '';
      this.txtSaldo.nativeElement.value = '';
      this.txtPrecio.nativeElement.value = '';
    } else {
      Swal.fire('Fallo en agregar','Debe llenar todos los campos para agregar', 'warning')
    }
  }


  onCancel() {
    Swal.fire('Proceso Cancelado', '', 'error');
    this.txtCodigo.nativeElement.value = '';
    this.txtConcepto.nativeElement.value = '';
    this.txtDescripcion.nativeElement.value = '';
    this.txtSaldo.nativeElement.value = '';
    this.txtPrecio.nativeElement.value = '';
  }



  @ViewChild('txtCodigoManipulable') txtCodigoManipulable!:ElementRef<HTMLInputElement>;
  @ViewChild('txtSaldoUpdate') txtSaldoUpdate!:ElementRef<HTMLInputElement>;
  @ViewChild('txtPrecioUpdate') txtPrecioUpdate!:ElementRef<HTMLInputElement>;

  updateBook(){
    const id = this.txtCodigoManipulable.nativeElement.value.trim();
    const saldo = this.txtSaldoUpdate.nativeElement.value.trim();
    const precio = this.txtPrecioUpdate.nativeElement.value.trim();
    if( id != '' && saldo != '' && precio != ''){
      if(saldo=='credito'){
        this.dailyBookService.httpUpdateBook(precio,'0.0',id)
      }else if(saldo=='debito'){
        this.dailyBookService.httpUpdateBook('0.0',precio,id)
      }else{
        Swal.fire('Saldo Incorrecto','','error')
      }
    }else{
      Swal.fire('Debes llenar los campos','','warning')
    }
  }

  deleteBook(){
    const id = this.txtCodigoManipulable.nativeElement.value.trim();

    if(id != ''){
      Swal.fire({
        title: '¿Quieres eliminar este libro diario?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `SI`,
        denyButtonText: `NO`,
      }).then((result) => {
        //Confirmación de las preguntas
        if (result.isConfirmed) {
          this.dailyBookService.httpDelete(id);
        } else if (result.isDenied) {
          Swal.fire('Proceso cancelado', '', 'info')
        }
      })
    }else{
      Swal.fire('Campo ID vacío','Debes ingresar el ID del libro a eliminar','warning')
    }
  }


  getListJournal(): ListaJournal[] | undefined {
    return this.dailyBookService.getEnterprise().listaJournal;
  }

  constructor(
    private dailyBookService: HomeService,
    private daily: DailyBookService
  ) {
    let welcomeEnterprise: Welcome = {
      id: 0,
      name: 'a',
      nit: 0,
      description: 'a',
      direction: 'a',
      phoneNumber: 'a',
    };
    welcomeEnterprise = this.dailyBookService.getEnterprise();
  }
}
