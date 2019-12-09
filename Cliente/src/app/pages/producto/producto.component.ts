import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../../services/producto.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Producto } from '../../models/producto.model';
//un componente
@Component({
    selector:'app-producto',
    templateUrl: './Producto.component.html'
})
export class ProductoComponent {
  productos:Producto[];

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
  this.listarProducto();
  }
  listarProducto(){
  this.productoService.getAll().subscribe(
      date=>{
          console.log(date);
          this.productos=date;

      },
      error=>{
          console.log(error);

      }
      );
  }

  eliminar(id: number) {
this.productoService.delete(id).subscribe(
  data =>{
    console.log(data);
    this.listarProducto();
  },
  error =>{
    console.log(error);
  }
)
  }
}
