import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from '@agm/core';
import { EditDoComponent } from './edit-do.component';
import { EditDoRoutingModule } from './edit-do-routing.module';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  imports: [
    FormsModule,  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBm9oUZkAt3s5AhdSPrT9Ww2enFfiScEXI'
    }),
    CommonModule,
    EditDoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ EditDoComponent ]
})
export class EditDoModule { }