import { Component, OnInit } from '@angular/core';

import { PedidoService } from '../../services/pedido.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Pedido } from '../../models/pedido.model';
//un componente

@Component({
    selector:'app-pedido',
    templateUrl: './Pedido.component.html'
})
export class PedidoComponent {
  pedidos:Pedido[];


  constructor(private pedidoService:PedidoService){}

  ngOnInit(): void {
  this.listarPedido();
  }
  listarPedido(){
  this.pedidoService.getAll().subscribe(
      date=>{
          console.log(date);
          this.pedidos=date;
          
      },
      error=>{
          console.log(error);
         
      }
      );
  }
}