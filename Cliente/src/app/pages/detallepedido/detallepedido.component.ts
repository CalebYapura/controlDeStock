import { Component, OnInit } from '@angular/core';

import { DetallePedidoService } from '../../services/detallepedido.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DetallePedido } from '../../models/detallepedido.model';
//un componente

@Component({
    selector:'app-detallepedido',
    templateUrl: './DetallePedido.component.html'
})

export class DetallePedidoComponent {
  detallepedidos:DetallePedido[];


  constructor(private detallepedidoService:DetallePedidoService){}

  ngOnInit(): void {
  this.listarDetallePedido();
  }
  listarDetallePedido(){
  this.detallepedidoService.getAll().subscribe(
      date=>{
          console.log(date);
          this.detallepedidos=date;
          
      },
      error=>{
          console.log(error);
         
      }
      );
  }
}