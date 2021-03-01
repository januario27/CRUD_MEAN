import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(private router: Router, private autosService: AutosService) { }

  lista:any = [


  ];

  ngOnInit(): void {
    this.buscar();
  }

  buscar() : void {
    this.autosService.listarAuto().subscribe(
      (res)=>{
        this.lista=res;
      },
      (error)=>{
        console.log(error);
      }

    );
  }

  eliminar(auto:any) {
    this.autosService.eliminarAuto(auto).subscribe(
      (res)=>{
        this.autosService.listarAuto().subscribe(
          (res)=>{
            this.buscar();
          },
          (error)=>{
            console.log(error);
          }
    
        );
    
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
