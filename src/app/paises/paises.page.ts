import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {
  public imagen: string = '';
  public nombre: string = '';
  public localizacion: string = '';
  public capital: string = "";


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros => {
      this.imagen = parametros['imagen'] || 'Sin imagen';
      this.nombre = parametros['nombre'] || 'Sin nombre';
      this.localizacion = parametros['localizacion'] || 'Sin localizacion';
      this.capital = parametros['capital'] || 'Sin capital';
  });
  }


}
