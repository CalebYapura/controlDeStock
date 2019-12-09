import { Component, OnInit } from '@angular/core';

import { ProveedorService } from '../../services/proveedor.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Proveedor } from '../../models/proveedor.model';
//un componente
@Component({
    selector:'app-proveedor',
    templateUrl: './Proveedor.component.html'
})
export class ProveedorComponent {
  proveedors:Proveedor[];

  constructor(private proveedorService:ProveedorService){}

  ngOnInit(): void {
  this.listarProveedor();
  }
  listarProveedor(){
  this.proveedorService.getAll().subscribe(
      date=>{
          console.log(date);
          this.proveedors=date;

      },
      error=>{
          console.log(error);

      }
      );
  }
  eliminar(id: number) {
    this.proveedorService.delete(id).subscribe(
      data =>{
        console.log(data);
        this.listarProveedor();
      },
      error =>{
        console.log(error);
      }
    )
  }
}
