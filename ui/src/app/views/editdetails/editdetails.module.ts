import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from '@agm/core';
import { EditdetailsComponent } from './editdetails.component';
import { EditdetailsRoutingModule } from './editdetails-routing.module';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  imports: [
    FormsModule,  
    CommonModule,
    EditdetailsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ EditdetailsComponent ]
})
export class EditdetailsModule { }