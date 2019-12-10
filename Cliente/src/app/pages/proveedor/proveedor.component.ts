import { Component, OnInit } from '@angular/core';

import { ProveedorService } from '../../services/proveedor.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Proveedor } from '../../models/proveedor.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categoria} from "../../models/categoria.model";
//un componente
@Component({
    selector:'app-proveedor',
    templateUrl: './Proveedor.component.html'
})
export class ProveedorComponent {
  proveedors:Proveedor[];
  proveedorForm:FormGroup;

  constructor(private proveedorService:ProveedorService, private formBuilder :FormBuilder){}

  ngOnInit(): void {
  this.listarProveedor();
  this.crearFormulario();
  }
  crearFormulario(){
    this.proveedorForm=this.formBuilder.group({
      nombre:["",[Validators.required]],
      apellidos:["",[Validators.required]],
      direccion:["",[Validators.required]],
      celular:["",[Validators.required]],
    });
  }
  guardarProveedor(){
    const newProveedor = new  Proveedor();
    newProveedor.nombre= this.proveedorForm.value.nombre;
    newProveedor.apellidos= this.proveedorForm.value.apellidos;
    newProveedor.direccion= this.proveedorForm.value.direccion;
    newProveedor.celular= this.proveedorForm.value.celular;

    this.proveedorService.create(newProveedor).subscribe(
      data=>{
        console.log(data);
        this.listarProveedor();
      }
    );
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
  editProveedor(id: any) {

  }
}
