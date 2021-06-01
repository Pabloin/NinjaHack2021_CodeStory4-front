import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';

import { FormsRoutingModule } from './forms-routing.module';
import { BuscaComponent } from './busca/busca.component';
import { SubeComponent } from './sube/sube.component';
import { AnalizaComponent } from './analiza/analiza.component';
import { IniciaComponent } from './inicia/inicia.component';


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbCheckboxModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    FormsRoutingModule
  ],
  declarations: [
    BuscaComponent,
    SubeComponent,
    AnalizaComponent,
    IniciaComponent,
  ],
  exports: [
    BuscaComponent,
    SubeComponent,
    AnalizaComponent,
    IniciaComponent,
  ]
})
export class FormsModule { }
