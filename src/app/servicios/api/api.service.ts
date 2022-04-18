import { Injectable } from '@angular/core';
import { HorarioI } from '../../modelos/horario.interface';
import { NumeroInversoI} from '../../modelos/numero.interface';
import { NumeroInversoResponseI } from '../../modelos/numero_respose_interface';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*url:string = "/api/";*/

  url:string = "http://localhost:54975/api/";


  constructor( private http:HttpClient) { }

  horario(orden: string):Observable<HorarioI>{
    let direccion = this.url + "hora_ingreso/orden/" + orden;
    return this.http.get<HorarioI>(direccion);

  }

  numeroInverso(numero: number):Observable<NumeroInversoResponseI>{
    let direccion = this.url + "orden_inverso/numero/" + numero;
    return this.http.get<NumeroInversoResponseI>(direccion);

  }

}
