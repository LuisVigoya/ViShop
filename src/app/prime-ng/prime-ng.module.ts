import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';



@NgModule({
  exports: [
    ButtonModule,
  ]
})
export class PrimeNgModule { }

/**
 * En la parte superior es donde iremos haciendo los imports de los modulos que ofrece prime ng para
 * usar en nuestra apliacion, en este caso ya tenemos importado los botones
 */
