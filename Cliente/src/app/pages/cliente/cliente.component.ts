import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Cliente } from '../../models/cliente.model';
//un componente
@Component({
    selector:'app-cliente',
    templateUrl: './Cliente.component.html'
})
export class ClienteComponent {
  clientes:Cliente[];

  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
  this.listarCliente();
  }
  listarCliente(){
  this.clienteService.getAll().subscribe(
      date=>{
          console.log(date);
          this.clientes=date;
          
      },
      error=>{
          console.log(error);
         
      }
      );
  }
}
