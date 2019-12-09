import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from '../../models/categoria.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector:'app-categoria',
    templateUrl: './Categoria.component.html'
})
export class CategoriaComponent {
    categorias:Categoria[];
categoriaForm:FormGroup;


    constructor(private categoriaService:CategoriaService, private formBuilder :FormBuilder){}

    ngOnInit(): void {
      this.crearFormulario();
      this.listarCategoria();
    }
      crearFormulario(){
      this.categoriaForm=this.formBuilder.group({
        nombre:["",[Validators.required]],
        descripcion:["",[Validators.required]],
      });
      }
    guardar(){
      const newCategoria = new  Categoria();
       newCategoria.nombre= this.categoriaForm.value.nombre;
       newCategoria.descripcion= this.categoriaForm.value.descripcion;

      this.categoriaService.create(newCategoria).subscribe(
        data=>{
          console.log(data);
          this.listarCategoria();
        }
      );
    }



    listarCategoria(){
    this.categoriaService.getAll().subscribe(
        date=>{
            console.log(date);
            this.categorias=date;

        },
        error=>{
            console.log(error);

        }
        );
    }

  eliminarCategoria(id: any) {
      this.categoriaService.delete(id).subscribe(
        data=>{
          console.log(data);
          this.listarCategoria();
        }
      );

  }

  editCategoria(id: any) {

  }

}
