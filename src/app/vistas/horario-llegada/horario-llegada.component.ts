import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { HorarioI } from 'src/app/modelos/horario.interface';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-horario-llegada',
  templateUrl: './horario-llegada.component.html',
  styleUrls: ['./horario-llegada.component.scss']
})
export class HorarioLlegadaComponent implements OnInit {

  datoHorario: HorarioI | undefined;

  editarForm = new FormGroup({
    seleccion: new FormControl(''),
    resultado: new FormControl(''),
  });

  get seleccion(): any {
    return this.editarForm.get('seleccion');
  }
  

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  onHorario(){
    this.api.horario(this.seleccion.value).subscribe(data =>{
      this.datoHorario = data;
      this.editarForm.setValue({
        'seleccion': this.seleccion.value,
        'resultado': data,
      });
    } )
  }
 onRegresar(){
    this.router.navigate(['principal']);
  }


}
