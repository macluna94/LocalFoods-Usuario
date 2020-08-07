import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalDetailPage } from './local-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LocalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalDetailPageRoutingModule {}
