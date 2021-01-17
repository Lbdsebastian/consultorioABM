import { Component, OnInit } from '@angular/core';
import { ServicioCompartidoService } from '../servicio-compartido.service';

@Component({
  selector: 'app-lista-departamentos',
  templateUrl: './lista-departamentos.component.html',
  styleUrls: ['./lista-departamentos.component.css']
})
export class ListaDepartamentosComponent implements OnInit {

  departamento: any;
  formAgregarDepartamento: boolean = false;
  constructor(private servicio: ServicioCompartidoService) { }

  ngOnInit(): void {
  }

  
  agregarD(){
    this.formAgregarDepartamento = true;
  }

  cancelarAgregarD(){
    this.formAgregarDepartamento = false;
  }
}
