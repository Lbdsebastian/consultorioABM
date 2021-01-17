import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCompartidoService {

  readonly APIUrl="https://localhost:44369/api";


  constructor(private http: HttpClient) { }


  // Servicios API Pacientes
  obtenerPacientes(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/pacientes');
  }

  crearPaciente(val: any){
    return this.http.post(this.APIUrl + '/pacientes', val);
  } 

  modificarPaciente(id: any, val: any){
    return this.http.put(this.APIUrl + '/pacientes/' + id, val)
  }

  eliminarPaciente(val:any){
    return this.http.delete(this.APIUrl + '/pacientes/' + val)
  }
  
  // Servicios API Departamentos
  obtenerDepartamentos(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/departamentos');
  }

  crearDepartamentos(val: any){
    return this.http.post(this.APIUrl + '/departamentos', val)
  } 

  modificarDepartamentos(id: any, val: any){
    return this.http.put(this.APIUrl + '/departamentos/'+ id, val)
  }

  eliminarDepartamentos(val:any){
    return this.http.delete(this.APIUrl + '/departamentos/' + val)
  }
}