import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { EditDoComponent } from './edit-do.component';

const routes: Routes = [
  {
    path: '',
    component: EditDoComponent,
    data: {
      title: 'Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDoRoutingModule {}
