import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EditdetailsComponent } from './editdetails.component';

const routes: Routes = [
  {
    path: '',
    component: EditdetailsComponent,
    data: {
      title: 'Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditdetailsRoutingModule {}