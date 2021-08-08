import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 6px;
      }
    `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {

  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva)
            ? 'btn btn-success' 
            : 'btn btn-outline-success';

  }

  activarRegion( region: string) {

    //no recarga para que volver a cargar la misma region
    if(region === this.regionActiva) {return;}
    
    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer el llamado al servicio por region
    this.paisService.BuscarPorRegion(region)
    .subscribe( (regiones) => {
      console.log(regiones);
      this.paises = regiones
    })
  }
  

}
