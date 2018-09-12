import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";

import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  imports: [
    FormsModule,  
    
    CommonModule,
    DetailsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DetailsComponent ]
})
export class DetailsModule { }
