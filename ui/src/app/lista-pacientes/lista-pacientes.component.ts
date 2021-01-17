import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  paciente: any;
  formAgregarPaciente: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  
  agregarP(){
    this.formAgregarPaciente = true;
  }

  cancelarAgregarP(){
    this.formAgregarPaciente = false;
  }

}
