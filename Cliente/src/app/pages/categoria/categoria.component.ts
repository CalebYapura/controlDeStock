import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Categoria } from '../../models/categoria.model';

@Component({
    selector:'app-categoria',
    templateUrl: './Categoria.component.html'
})
export class CategoriaComponent {
    categorias:Categoria[];
    constructor(private categoriaService:CategoriaService){}

    ngOnInit(): void {
    this.listarCategoria();
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
}
