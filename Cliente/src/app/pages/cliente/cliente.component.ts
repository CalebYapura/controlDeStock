import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Cliente } from '../../models/cliente.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categoria} from "../../models/categoria.model";
//un componente
@Component({
    selector:'app-cliente',
    templateUrl: './Cliente.component.html'
})
export class ClienteComponent {
  clientes:Cliente[];
  clienteForm:FormGroup;


  constructor(private clienteService:ClienteService, private formBuilder :FormBuilder){}

  ngOnInit(): void {
    this.crearFormulario();
    this.listarCliente();

  }
  crearFormulario(){
    this.clienteForm=this.formBuilder.group({
      nombre:["",[Validators.required]],
      apellidos:["",[Validators.required]],
      direccion:["",[Validators.required]],
      celular:["",[Validators.required]],
    });
  }
  guardarCliente(){
    const newCliente = new  Cliente();
    console.log(newCliente);
    newCliente.nombre= this.clienteForm.value.nombre;
    newCliente.apellidos= this.clienteForm.value.apellido;
    newCliente.direccion= this.clienteForm.value.direccion;
    newCliente.celular= this.clienteForm.value.celular;

    this.clienteService.create(newCliente).subscribe(
      data=>{
        console.log(data);
        this.listarCliente();
      }
    );
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
  eliminar(id: number) {
    this.clienteService.delete(id).subscribe(
      data =>{
        console.log(data);
        this.listarCliente();
      },
      error =>{
        console.log(error);
      }
    )
  }
  editar(id: any) {
  }
}
