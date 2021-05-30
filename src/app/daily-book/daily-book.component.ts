import { Component, ViewChild, ElementRef } from '@angular/core';
import { Welcome } from '../login/interface/login.interface';
import Swal from 'sweetalert2';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-daily-book',
  templateUrl: './daily-book.component.html',
  styles: [
    `
      input[type='number'] {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
        -moz-transition: border-color 0.2s ease-in-out;
        -webkit-transition: border-color 0.2s ease-in-out;
        -ms-transition: border-color 0.2s ease-in-out;
        transition: border-color 0.2s ease-in-out;
        background: transparent;
        border-radius: 4px;
        border: solid 1px rgba(255, 255, 255, 0.3);
        color: inherit;
        display: block;
        outline: 0;
        padding: 0 1em;
        text-decoration: none;
        width: 100%;
        height: 3em;
      }
    `,
  ],
})
export class DailyBookComponent {
  Enterprise!: Welcome;
  doblecouting: boolean[] = [];

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
      if (
        saldo.trim().toLowerCase() == 'credito' ||
        saldo.trim().toLowerCase() == 'crédito'
      ) {
        this.loginService
          .addDailyBookCredit(codigo, precio, descripcion, this.Enterprise.id)
          .subscribe((resp) => console.log(resp));
        this.refreshEnterprise();
      } else if (
        saldo.trim().toLowerCase() == 'debito' ||
        saldo.trim().toLowerCase() == 'débito'
      ) {
        this.loginService
          .addDailyBookDebit(codigo, precio, descripcion, this.Enterprise.id)
          .subscribe((resp) => console.log(resp));
      } else {
        Swal.fire(
          'Saldo no válido',
          ' El campo saldo debe ser credito o debito',
          'warning'
        );
      }

      this.txtCodigo.nativeElement.value = '';
      this.txtConcepto.nativeElement.value = '';
      this.txtDescripcion.nativeElement.value = '';
      this.txtSaldo.nativeElement.value = '';
      this.txtPrecio.nativeElement.value = '';
    } else {
      Swal.fire(
        'Fallo en agregar',
        'Debe llenar todos los campos para agregar',
        'warning'
      );
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

  @ViewChild('txtCodigoManipulable')
  txtCodigoManipulable!: ElementRef<HTMLInputElement>;
  @ViewChild('txtSaldoUpdate') txtSaldoUpdate!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPrecioUpdate') txtPrecioUpdate!: ElementRef<HTMLInputElement>;

  updateBook() {
    const id = this.txtCodigoManipulable.nativeElement.value.trim();
    const saldo = this.txtSaldoUpdate.nativeElement.value.trim();
    const precio = this.txtPrecioUpdate.nativeElement.value.trim();
    if (id != '' && saldo != '' && precio != '') {
      if (saldo == 'credito') {
        this.loginService
          .updateDailyBookCredit(precio, id)
          .subscribe((resp) => {
            if (resp) {
              Swal.fire('Actualizado correctamente', '', 'success');
            } else {
              Swal.fire('Algo ha salido mal.', '', 'error');
            }
          });
      } else if (saldo == 'debito') {
        this.loginService.updateDailyBookDebit(precio, id).subscribe((resp) => {
          if (resp) {
            Swal.fire('Actualizado correctamente', '', 'success');
          } else {
            Swal.fire('Algo ha salido mal.', '', 'error');
          }
        });
      } else {
        Swal.fire('Saldo Incorrecto', '', 'error');
      }
    } else {
      Swal.fire('Debes llenar los campos', '', 'warning');
    }
  }

  deleteBook() {
    const id = this.txtCodigoManipulable.nativeElement.value.trim();

    if (id != '') {
      Swal.fire({
        title: '¿Quieres eliminar este libro diario?',
        showDenyButton: true,
        confirmButtonText: `SI`,
        denyButtonText: `NO`,
      }).then((result) => {
        //Confirmación de las preguntas
        if (result.isConfirmed) {
          this.loginService.deleteDailyBook(id).subscribe((resp) => {
            if (resp) {
              Swal.fire('Eliminacion completada', '', 'success');
            } else {
              Swal.fire('Algo salió mal', '', 'error');
            }
          });
        } else if (result.isDenied) {
          Swal.fire('Proceso cancelado', '', 'info');
        }
      });
    } else {
      Swal.fire(
        'Campo ID vacío',
        'Debes ingresar el ID del libro a eliminar',
        'warning'
      );
    }
  }

  //Actualiza la Empresa para que el saldo de la tabla se actualice,
  // por el momento no fuinciona del todo bien xd
  refreshEnterprise() {}

  listDate: Date[] = [];

  //DoubleCouting
  onDoubleCouting() {
    this.Enterprise.listaJournal.forEach((journal) => {
      this.listDate.push(journal.date);
    });

    for (let i = this.Enterprise.listaJournal.length - 1; i >= 0; i--) {
      if (this.listDate.indexOf(this.listDate[i]) !== i) {
        this.listDate.splice(i, 1);
      }
    }

    this.listDate.forEach((date) => {
      let dates: string = date.toString();
      this.loginService
        .doubleCounting(this.Enterprise.id, dates)
        .subscribe((resp) => {
          this.doblecouting.push(resp);
        });
    });
  }

  constructor(private loginService: LoginService) {
    this.loginService.findEnterprise().subscribe((resp) => {
      this.Enterprise = resp;
    });
  }
}
